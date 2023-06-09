// roles.guard.ts

import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { UserDTO } from './user.dto';
import { Roles } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No roles specified, allow access
    }

    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    // Assign roles based on the username
    const username = req.headers['x-username']; // Assuming the username is sent in the request headers

    if (username === 'admin') {
      req.user = {
        id: '1',
        name: 'Admin User',
        roles: [Roles.Admin],
      };
    } else if (username === 'controller') {
      req.user = {
        id: '2',
        name: 'Controller User',
        roles: [Roles.Controller],
        categories: ['1', '2'], // Example of assigned categories for the controller
      };
    } else {
      // Default role for other users
      req.user = {
        id: '3',
        name: 'Normal User',
        roles: [Roles.NormalUser],
      };
    }

    return requiredRoles.some((role) => req.user.roles.includes(role));
  }
}

export const HasRoles = (...roles: Roles[]) => SetMetadata('roles', roles);

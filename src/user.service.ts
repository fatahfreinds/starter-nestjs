// user.service.ts

import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { Roles } from './roles.enum';

@Injectable()
export class UserService {
  private users: UserDTO[] = [
    {
      id: '1',
      name: 'Admin User',
      roles: [Roles.Admin],
    },
    {
      id: '2',
      name: 'Controller User',
      roles: [Roles.Controller],
      categories: ['1', '2'], // Example of assigned categories for the controller
    },
  ];

  async getUserById(id: string): Promise<UserDTO | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async getUserByName(name: string): Promise<UserDTO | undefined> {
    return this.users.find((user) => user.name === name);
  }
}

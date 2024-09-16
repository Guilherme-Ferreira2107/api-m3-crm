import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserDto } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    try {
      const response = await this.userRepository.find();
      if (response) {
        console.log('response: ', response);
        response.map((item) => {
          item.password = undefined;
        });
      }
      return response;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async getUsersById(id: string): Promise<UserEntity> {
    const response = this.userRepository.findOne({ where: { id } });
    if (response) {
      (await response).password = undefined;
    }
    return response;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUsers(params: CreateUserDto): Promise<UserEntity> {
    const createdUser = await this.userRepository.save(params);

    if (createdUser) {
      createdUser.password = undefined;
    }
    return createdUser;
  }

  async updateUsers(id: string, params: Partial<UserDto>): Promise<UserEntity> {
    await this.userRepository.update(id, params);
    const response = this.userRepository.findOne({ where: { id } });
    if (response) {
      (await response).password = undefined;
    }
    return response;
  }

  async deleteUsers(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}

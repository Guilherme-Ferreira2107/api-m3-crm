import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvalidCredentialsException } from 'src/shared/exceptions';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    const response = this.userRepository.find();
    if (response) {
      (await response).map((item) => {
        item.password = undefined;
      });
    }
    return response;
  }

  async getUsersById(id: number): Promise<UserEntity> {
    const response = this.userRepository.findOne({ where: { id } });
    if (response) {
      (await response).password = undefined;
    }
    return response;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUsers(params: UserDto): Promise<UserEntity> {
    const itemCreated = this.userRepository.create(params);
    const response = this.userRepository.save(itemCreated);
    if (response) {
      (await response).password = undefined;
    }
    return response;
  }

  async updateUsers(id: number, params: Partial<UserDto>): Promise<UserEntity> {
    await this.userRepository.update(id, params);
    const response = this.userRepository.findOne({ where: { id } });
    if (response) {
      (await response).password = undefined;
    }
    return response;
  }

  async deleteUsers(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}

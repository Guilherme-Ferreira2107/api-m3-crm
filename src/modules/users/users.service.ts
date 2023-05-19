import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return this.userRepository.find();
  }

  async getUsersById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUsers(params: UserDto): Promise<UserEntity> {
    const itemCreated = this.userRepository.create(params);
    return this.userRepository.save(itemCreated);
  }

  async updateUsers(id: number, params: Partial<UserDto>): Promise<UserEntity> {
    await this.userRepository.update(id, params);
    return this.userRepository.findOne({ where: { id } });
  }

  async deleteUsers(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}

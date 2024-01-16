import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto, res) {
    try {
      const userData = await this.usersRepository.findOneBy({
        email: body.email,
      });

      if (userData) {
       return res.status(400).json({
        error: {
          message: "Email đã tồn tại!"
        }
       })
      }
      return await this.usersRepository.save(body);
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

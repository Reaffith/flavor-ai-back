/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto) {
    const user = await this.dbService.users.findUnique({ where: { email } });

    if (!user) return null;

    if (user && !(await bcrypt.compare(password, user.passwordHash))) {
      return null;
    }

    const { passwordHash, ...jwtPayload } = user;

    return this.jwtService.sign(jwtPayload);
  }
}

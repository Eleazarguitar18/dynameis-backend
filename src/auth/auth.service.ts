import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';

@Injectable()
export class AuthService {
  async createUser(createUserDto: CreateUsuarioDto) {
  const { id_persona, ...userData } = createUserDto;

  let persona = null;
  if (id_persona) {
    persona = await this.personaRepository.findOneBy({ id: id_persona });
    if (!persona) throw new NotFoundException('Persona no encontrada');
  }

  const user = this.userRepository.create({
    ...userData,
    persona, // asigna la entidad completa, no solo el id
  });

  return this.userRepository.save(user);
}


  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

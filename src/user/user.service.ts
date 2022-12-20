import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  private userarr=[{
    id: 1,
    name: "aditya",
    email: "aditya@gmail.com"
  },
  {
    id: 2,
    name: "nikhil",
    email: "nikhil@gmail.com"
  }
];

  create(createUserDto: CreateUserDto) {
    this.userarr.push(createUserDto);
    return this.userarr;
  }

  findAll() {
    return this.userarr;
  }

  findOne(id: number):CreateUserDto {
    let res: CreateUserDto = this.userarr.find((e) => Number(e.id)==Number(id));
    console.log(res,id);
    return res;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    let ind=this.userarr.findIndex((e) => Number(e.id)==Number(id));
    console.log(ind);
    this.userarr[ind]=updateUserDto;
    return this.userarr;
  }

  remove(id: number) {
    console.log(this.userarr);
    let ind=this.userarr.findIndex((e) => Number(e.id)==Number(id));
    console.log(ind);    
    this.userarr.splice(ind, 1);
    return this.userarr;
  }
}

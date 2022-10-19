import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let Usercontroller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    Usercontroller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(Usercontroller).toBeDefined();
  });
});

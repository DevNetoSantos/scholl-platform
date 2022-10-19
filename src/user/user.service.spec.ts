import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('TesteService', () => {
  let Userservice: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    Userservice = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(Userservice).toBeDefined();
  });
});

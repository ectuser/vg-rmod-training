import { Test, TestingModule } from '@nestjs/testing';
import { CountryCodesController } from './country-codes.controller';

describe('CountryCodesController', () => {
  let controller: CountryCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryCodesController],
    }).compile();

    controller = module.get<CountryCodesController>(CountryCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

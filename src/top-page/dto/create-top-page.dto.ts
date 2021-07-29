import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsArray, ValidateNested, IsEnum } from 'class-validator';

import { TopLevelCategory } from '../top-page.model';

class hhDataDto {
  @IsNumber()
  count: number;

  @IsNumber()
  juniorSalary: number;

  @IsNumber()
  middleSalary: number;

  @IsNumber()
  seniorSalary: number;
}

class TopPageAdvantageDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

  @IsString()
  secondCategory: string;

  @IsString()
  alias: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => hhDataDto)
  hh?: hhDataDto;

  @IsArray()
  @ValidateNested()
  @Type(() => TopPageAdvantageDto)
  advantages: TopPageAdvantageDto[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}

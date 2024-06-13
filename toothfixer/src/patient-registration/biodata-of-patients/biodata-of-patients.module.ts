import { Module } from '@nestjs/common';
import { BiodataOfPatientsService } from './biodata-of-patients.service';
import { BiodataOfPatientsController } from './biodata-of-patients.controller';

@Module({
  controllers: [BiodataOfPatientsController],
  providers: [BiodataOfPatientsService],
})
export class BiodataOfPatientsModule {}

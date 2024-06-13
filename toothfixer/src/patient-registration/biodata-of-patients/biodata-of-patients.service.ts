import { Injectable } from '@nestjs/common';
import { CreateBiodataOfPatientDto } from './dto/create-biodata-of-patient.dto';
import { UpdateBiodataOfPatientDto } from './dto/update-biodata-of-patient.dto';

@Injectable()
export class BiodataOfPatientsService {
  create(createBiodataOfPatientDto: CreateBiodataOfPatientDto) {
    return 'This action adds a new biodataOfPatient';
  }

  findAll() {
    return `This action returns all biodataOfPatients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodataOfPatient`;
  }

  update(id: number, updateBiodataOfPatientDto: UpdateBiodataOfPatientDto) {
    return `This action updates a #${id} biodataOfPatient`;
  }

  remove(id: number) {
    return `This action removes a #${id} biodataOfPatient`;
  }
}

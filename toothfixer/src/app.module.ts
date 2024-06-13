import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRegistrationModule } from './patient-registration/patient-registration.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432, // Ensure this is the correct port
      username: "postgres",
      password: "postgres",
      database: "toothfixer",
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: true,
      logging: true, // Enable logging for more detailed output
    }),
    PatientRegistrationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

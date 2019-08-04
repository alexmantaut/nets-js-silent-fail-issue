import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Monitor } from './Monitor'
import { MonitorController } from './Monitor.controller'
import { MonitorService } from './Monitor.service'

@Module({
  controllers: [MonitorController],
  imports: [TypeOrmModule.forFeature([Monitor])],
  providers: [MonitorService]
})
export class MonitorModule {}

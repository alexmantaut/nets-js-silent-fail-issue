import { Controller, Get } from '@nestjs/common'
import { Monitor } from './Monitor'
import { MonitorService } from './Monitor.service'

@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get()
  public findAll(): Promise<Monitor[]> {
    return this.monitorService.findAll()
  }
}

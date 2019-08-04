import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Monitor } from './Monitor'

@Injectable()
export class MonitorService {
  constructor(
    @InjectRepository(Monitor)
    private readonly monitorRepository: Repository<Monitor>
  ) {}

  /**
   *
   */
  public findAll(): Promise<Monitor[]> {
    return this.monitorRepository.find()
  }

  /**
   *
   * @param monitor
   */
  public save(monitor: Monitor): Promise<Monitor> {
    return this.monitorRepository.save(monitor)
  }
}

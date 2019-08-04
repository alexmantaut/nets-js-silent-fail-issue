import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Monitor } from './monitor/Monitor'
import { MonitorService } from './monitor/Monitor.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      logging: true,
      name: `default`,
      port: 3306,
      synchronize: true,
      type: `mysql`,
      // host: 'syd-mysql-stage-inst1.cxzhpzdg3fyk.ap-southeast-2.rds.amazonaws.com',
      // username: 'chendricks',
      // database: 'fmbt_v2',
      // password: 'bluedays2',

      host: '10.0.2.15',
      username: 'farmbot',
      database: 'fmbt_v2',
      password: 'pass',
      namingStrategy: new SnakeNamingStrategy(),
      entities: [Monitor]
    })
  ],
  controllers: [],
  providers: [MonitorService]
})
export class PersistenceModule {
  constructor(private readonly connection: Connection) {}
}

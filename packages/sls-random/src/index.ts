import { NestFactory } from '@nestjs/core'
import { MonitorModule, MonitorService } from '@org/random'

async function handler() {
  console.log('Start')

  try {
    const app = await NestFactory.createApplicationContext(MonitorModule, {})
  } catch (error) {
    console.log('Error', error)
  }

  console.log('success')
}

handler().then(
  (value: void) => {
    console.log('Test program end')
    process.exit()
  },
  (reason: Error) => {
    console.error('Test program uncaught exception:', reason)
    process.exit()
  }
)

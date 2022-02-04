const amqp = require('amqplib/callback_api')

class ProductChannel {
  constructor({ container }) {
    this.container = container
    this.queue = 'tst_event_sourcing/domain_events'
  }

  emit = async (event) => {
    await amqp.connect(
      `amqp://${this.container.get('env').broker.user}:${this.container.get('env').broker.password}@${this.container.get('env').broker.host}`,
      (error0, connection) => {
        if (error0) throw error0

        connection.createChannel((error1, channel) => {
          if (error1) throw error1

          channel.assertQueue(this.queue, { durable: false })
          channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(event)))
        })
      })
  }

  listen = async (callback) => {
    await amqp.connect(
      `amqp://${this.container.get('env').broker.user}:${this.container.get('env').broker.password}@${this.container.get('env').broker.host}`,
      (error0, connection) => {
        if (error0) throw error0

        connection.createChannel((error1, channel) => {
          if (error1) throw error1

          channel.assertQueue(this.queue, { durable: false })
          channel.consume(this.queue, message => callback(JSON.parse(message.content.toString())), { noAck: true })
        })
      })
  }
}

module.exports = ProductChannel

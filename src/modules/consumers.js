const CONSUMERS = {
  'channels.product': 'consumers.product#handle',
}

module.exports.registerConsumers = container => {
  Object.entries(CONSUMERS).forEach(([channel, consumer]) => {
    const [channelNamespace, channelName] = channel.split('.')
    const [meta, method] = consumer.split('#')
    const [consumerNamespace, consumerName] = meta.split('.')

    container.get(channelNamespace).get(channelName).listen(container.get(consumerNamespace).get(consumerName)[method])
  })
}

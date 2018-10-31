import RemoteStorage from 'remotestoragejs'

export default function test() {
  const remoteStorage = new RemoteStorage({logging: true})
  remoteStorage.access.claim('foo', 'rw')
  const client = remoteStorage.scope('/foo/')
  client
    .getListing('', false)
    .then(listing => console.log('remoteStorage listing', listing))
    .catch(err => {
      throw new Error(err)
    })
}

// throws an error in chrome in production
test()

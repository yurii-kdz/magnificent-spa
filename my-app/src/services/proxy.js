const settings = {
    defaultConnection: "127.0.0.1",
    anotherMockThing: "hi, how are u?",
}

const wrap = obj => {
    return new Proxy(obj, {
        get(target, propKey) {
            console.log(`Reading property "${propKey}"`)
            return target[propKey]
        }
    })
}
const object = { message: 'never mind i found someone like you!' }
const wrapped = wrap(object)
console.log(wrapped.message)
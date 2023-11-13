const makeQuery = (profile, data = {}) => {
    if (profile.type === 'client') {
        return {
            ...data,
            ClientId: profile.id
        }
    }

    return {
        ...data,
        ContractorId: profile.id
    }
}

module.exports = {
    makeQuery
}

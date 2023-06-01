export const updateSentStatus = (spatialLayouts, envelopes) => {

    let newSpatialLayout = spatialLayouts
    // Returns an array of envelopes with status that's not signed 
    const changedEnvelopes = envelopes.filter(envelope => envelope.status !== 'sent').map(envelope => ({
        status: envelope.status,
        envelopeId: envelope.envelopeId,
        statusChangedDateTime: envelope.statusChangedDateTime
    }))
    for (let i in newSpatialLayout) {
        for (let j in changedEnvelopes) {
            // Match any spatialLayout envelope with those of changed status
            if (newSpatialLayout[i].envelopeId === changedEnvelopes[j].envelopeId) {

                // If status is signed, change spatial layout envelope status to signed
                if (changedEnvelopes[j].status === "completed" || changedEnvelopes[j].status === "signed") {
                    newSpatialLayout[i].isSigned = true
                    newSpatialLayout[i].dateSigned = changedEnvelopes[j].statusChangedDateTime
                } else {
                    // If status belongs to any of the other categories, update envelopeStatus field
                    // instead of the isSigned field. 
                    newSpatialLayout[i].envelopeStatus = changedEnvelopes[j].status
                }
            }
        }
    }

    return newSpatialLayout
    
}
import _ from 'underscore';
import mongoose from '../../lib/mongoose';

const ObservationSchema = new mongoose.Schema({
    username: String,
    thing: {
        type: String,
        required: true
    },
    phenomenonTime: {
        type: Date,
        default: new Date()
    },
    type: {
        type: String,
        required: true
    }
});

ObservationSchema.statics.types = function(){
    return this.distinct("type");
};

ObservationSchema.statics.findLastN = function(n = 10, type){
    let findCriteria = undefined;
    if (!_.isUndefined(type)) {
        findCriteria = { type : type };
    }
    return this.find(findCriteria).sort({'phenomenonTime': -1}).limit(n);
};

const ObservationModel = mongoose.model('Observation', ObservationSchema);

export { ObservationSchema, ObservationModel };
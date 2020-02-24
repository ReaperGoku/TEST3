module.exports = {
    getGetOrdinal: function(count){
        var s=["th","st","nd","rd"],
        v=count%100;
        return count+(s[(v-20)%10]||s[v]||s[0]);
    },
}
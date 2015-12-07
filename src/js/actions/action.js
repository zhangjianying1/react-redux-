export let changeCoupon = function (val){
    return {type: 'CHANGE', val};
}
export let showLoading = function (val){
    return {type: 'LOAD', val};
}
export let showConfirm = function (val){
    return {type: 'CONFIRM', val};
}
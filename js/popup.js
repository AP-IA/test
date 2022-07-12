$(function(){
    chrome.storage.sync.get('total',function(budget){
        $('#total').text(budge.total);
    });
    $('#add').click(function(){
        // 1. 从浏览器中获取存储的金额
        // 第一个参数是获取数据的key，可以是一个也可以是两个
        // 第二个参数是获取到数据之后的回调函数,参数是我们获取的对象
        chrome.storage.sync.get('total',function(budget){
            var totalAmount = 0;
            if(budget.total){
                totalAmount = parseFloat(budget.total);
            }
            // 2. 将本次金额加到总金额并存储
            var amount = $('#amount').val();
            if(amount){
                totalAmount += parseFloat(amount);
                chrome.storage.sync.set({'total':totalAmount});
            }
            // 3. 更新显示ui
            $('#total').text(totalAmount);
            $('#amount').val('');
        });
    })
})
function printJobHook(inputs, actions) {
  // ジョブ分析が完了していない場合、関数を終了します
  if (!inputs.job.isAnalysisComplete) {
    return;
  }
  //Webプリントやモビリティ・プリントの場合にメールを送る。
  if (inputs.job.isWebPrintJob || inputs.job.isMobilityPrintJob){
    // 受信者のメールアドレスを取得します
    var emailRecipients = inputs.user.email;
    
    // メールの件名を設定します
    var emailSubject = "新しいプリントジョブが送信されました";
    
    // メールの本文を作成します
    var emailBody = "ユーザー " + inputs.job.username + " がプリントジョブを送信しました。ジョブの詳細:\n" +
        "ドキュメント名: " + inputs.job.documentName + "\n" +
        "残高:" +  inputs.user.balance + "\n" +
        "ページ数: " + inputs.job.totalPages + "\n" +
        "コピー数: " + inputs.job.copies + "\n" +
        "コスト:" + inputs.job.cost;    
    // メールを送信します
    actions.utils.sendEmail(emailRecipients, emailSubject, emailBody);
  }
}

​

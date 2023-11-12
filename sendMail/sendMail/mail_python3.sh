#!/bin/bash
# 2023.11.12 tarou hoge

SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER=""
SMTP_PASSWD=""
MAIL_SUBJECT=""
MAIL_TEXT="hoeeeeeeee fea eee"
MAIL_FROM=""
MAIL_TO_LIST=("")

/usr/local/bin/python3 - $SMTP_HOST $SMTP_PORT $SMTP_USER $SMTP_PASSWD "$MAIL_SUBJECT" "$MAIL_TEXT" $MAIL_FROM ${MAIL_TO_LIST[@]} << EOF

import sys
import smtplib
import email
from email.mime.text import MIMEText
from email.header import Header
from email.mime.multipart import MIMEMultipart

SMTP_HOST=sys.argv[1]
SMTP_PORT=sys.argv[2]
SMTP_USER=sys.argv[3]
SMTP_PASSWD=sys.argv[4]
MAIL_SUBJECT=sys.argv[5]
MAIL_TEXT=sys.argv[6]
MAIL_FROM=sys.argv[7]
MAIL_TO_LIST=sys.argv[8:len(sys.argv)]

try:
    smtp = smtplib.SMTP(SMTP_HOST,SMTP_PORT)
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()
    smtp.login(SMTP_USER,SMTP_PASSWD)
except smtplib.SMTPException as e:
    print(e)
    exit(1)

msg=MIMEMultipart()
msg["From"] = MAIL_FROM
msg["To"] = ",".join(MAIL_TO_LIST)
msg["Subject"] = MAIL_SUBJECT
body=MIMEText(MAIL_TEXT.encode("utf-8"),'plain','utf-8')
msg.attach(body)

smtp.sendmail(MAIL_FROM,MAIL_TO_LIST,msg.as_string())

smtp.close()

exit(0)
EOF
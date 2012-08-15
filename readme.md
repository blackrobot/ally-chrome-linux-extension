# Why?
This Chrome extension fixes the ally.com website when viewing it on
Chrome in Linux. I didn't want to install any extension that was
listening on every single page request because I like my extensions to
be lean.

Ally has some sort of browser detection which doesn't like seeing
"Linux" in it. I'm guessing there's some crappy switch statement, and
the page you get if you use Linux is the default. The biggest problem
is the "Pay Bills" page. It's completely unusable unless you change your
UA string. This extension does that, and only that. It changes it to:
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.43 Safari/536.11`

Anyway, this works, so I'm putting it here for fun.

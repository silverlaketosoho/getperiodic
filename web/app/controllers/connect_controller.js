load('application');
before(use("user_auth",{ except: ['logout']} ));
before(use("get_periodic_settings"));
before(use('require_login',{ only: ['accounts']}));

action('accounts', function () {
    render({ });
});

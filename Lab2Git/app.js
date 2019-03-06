const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    const firstname = "name";
    ctx.body = firstname;
})
.get('/first_page', (ctx, next) => {
    const lastname = "name";
    ctx.body = lastname;
})
.get('/second_page', (ctx, next) => {
    const gender = "male";
    ctx.body = gender;
})
.get('/third_page', (ctx, next) => {
    const skill = `
        - NodeJS<br>
        - MySQL<br>
        - React<br>
    `;
    ctx.body = skill;
})
.get('/fourth_page', (ctx, next) => {
    const MyProjectDescription = "This is project about how to learn code in 3 months";
    ctx.body = MyProjectDescription;
})
.get('/fifth_page', (ctx, next) => {
    const MyProjectDescription = "This is project about how to learn code in 3 months";
    ctx.body = MyProjectDescription;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

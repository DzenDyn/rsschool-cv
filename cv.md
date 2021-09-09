# *Evgeny Nikiforov*
**Junior Frontend Developer**

---
## *Contact information*
* **Phone:** +7 (989) 756-79-99
* **Email:** evgeniy.v.nikiforov@gmail.com
* **Telegram:** [@DzenDyn](https://t.me/dzendyn) 
* **GitHub:** [@DzenDyn](https://github.com/dzendyn)
* **Habr:** [@urbanrider](https://habr.com/ru/users/urbanrider/)  
  
---

## *About Me*
I started coding back in elementary school. The first language was Basiс and then Pascal. A few years later I started making the first sites using HTML.
Then I learned PHP and started making websites a little more complex. However, the main area of work and direction of training for me was system administration, and programming has remained my hobby.

Over the past 12 years, I have developed as a system administrator and network engineer applying my C# and Python programming skills to automate routine tasks.
I wrote a simple OpenSource utility to update DNS records in CloudFlare [zen-cf-ddns](https://github.com/DzenDyn/zen-cf-ddns).

During the pandemic, I had more free time and began to develop as a programmer and learn JS. I chose the Frontend direction, but also studied the Backend to get a general idea.

In the Backend, I worked with:
* Nodejs
* Express
* Nest
* OpenApi 3 and Swagger
* Mongoose + MongoDB
* TypeOrm
* PostgreSQL

In Frontend, I worked with:
* React and React Hooks
* Redux
* Axios
* AntDesign
* CSS modules

Now I want to systematize and deepen my knowledge in the direction of Frontend developer.

---

Skills and Proficiency:
* Javascript
* NodeJS
* Express
* NestJS
* Mongoose
* TypeORM
* MongoDB
* PostgreSQL
* React Basics
* Redux Basics
* Postman
* Docker and docker-compose
* HTML5 and CSS3 Basics
* Git, GitHub, Gitlab
* VSCode, WebStorm

---
## *Code Example*
### *Growth of a Population KATA from Codewars*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

My solution:
```javascript
function nbYear(p0, percent, aug, p) {
  let population = p0 + p0*(percent/100)+aug;
  let years =1;
  if(population >= p) return years;
  return years + nbYear(population, percent, aug, p);
}
```

### *Get data from MongoDB with Mongoose*
REST API endpoint returns optionally filtered paginated data from MongoDB with Mongoose. 
 

```javascript

export function getTariffication(req, res) {
    const {
        column,
        order,
        current = 1,
        // ...
        searchExactSubscriber,
        searchExactExternal
    } = req.query;
    const pageNumber = +current;
    const limit = +pageSize;

    const filter = {
        ...(subscriber && {
            subscriber: searchExactSubscriber ? subscriber : { $regex: subscriber, $options: 'i' }
        }),
        ...((dateStart || dateEnd) && {
            dateTime: {
                ...(dateStart && { $gte: dateStart }),
                ...(dateEnd && { $lt: dateEnd })
            }
        // ...
    };

    TarifficationRecord.find(filter)
        .sort({
            ...(order === 'ascend' && { [String(column)]: 1 }),
            ...(order === 'descend' && { [String(column)]: -1 })
        })
        .collation({ locale: 'en_US', numericOrdering: true })
        .limit(limit)
        .skip((pageNumber - 1) * limit)
        .then(async (records) => {
            const count = await TarifficationRecord.countDocuments(filter);
            res.json(
                // return result 
            });
        })
        .catch((err) => {
            // error
        });
}

```

---
## *Courses*
[JS Manual](https://learn.javascript.ru)  
[React Docs](https://ru.reactjs.org/docs/)  
[Nest Docs](https://docs.nestjs.com/)  
[Linux Course](https://www.netacad.com/ru/courses/os-it/ndg-linux-essentials)  
[«Vladilen Minin» Youtube channel](https://www.youtube.com/c/VladilenMinin)

### *Certificates*
* Microsoft M6425
* Microsoft M6426
* Cisco CCNAX
* NDG Linux Essentials
* Huawei FusionCube

## *Languages*
* English – Upper-intermediate/Advanced, but got C2 proficient on ![EFSET](/img/efset-logo.png):
![EFSET LEVEL 71 C2](/img/eng_lvl.png)
* Russian – Native

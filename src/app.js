import {Person} from './Person';
import './scss/style.scss';

const p = new Person('Phil');
setTimeout( () => {alert(p.sayHello());
}, 500);

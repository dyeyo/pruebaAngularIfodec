import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value);

    if (arg === '' || arg.length < 3) return value;
    const resultSkins = [];
    for (const skin of value) {
      if (skin.first_name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || skin.last_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSkins.push(skin);
      };
    };
    return resultSkins;
  }

}

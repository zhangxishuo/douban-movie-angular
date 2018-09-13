import { Pipe, PipeTransform } from '@angular/core';
import { Cast } from '../model/cast';

@Pipe({
    name: 'leadingRole'
})
export class LeadingRolePipe implements PipeTransform {

    transform(value: Cast[]): any {
        let castInfo = '';
        value.forEach((cast) => {
            castInfo += cast.name + '/';
        });
        castInfo = castInfo.substring(0, castInfo.length - 1);
        return castInfo;
    }

}

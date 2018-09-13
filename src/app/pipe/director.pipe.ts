import { Pipe, PipeTransform } from '@angular/core';
import { Director } from '../model/director';

@Pipe({
    name: 'director'
})
export class DirectorPipe implements PipeTransform {

    transform(value: Director[]): string {
        let directorInfo = '';
        value.forEach((director) => {
            directorInfo += director.name + '/';
        });
        directorInfo = directorInfo.substring(0, directorInfo.length - 1);
        return directorInfo;
    }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(dogs: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) {
        return dogs;
    }

    // check that what is searched is included in dog array
    return dogs.filter((dog) => {
      return dog.toLowerCase().includes(term.toLowerCase());
    })
  }

}

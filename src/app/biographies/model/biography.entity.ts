

export class BiographyEntity {

  Id: string
  LastModified: string
  PublicationDate: string
  DateCreated: string
  Title: string
  Provider: string
  Biography : string

  constructor(Id: string, LastModified: string, PublicationDate: string, DateCreated: string, Title: string, Provider: string, Biography: string) {
    this.Id = Id;
    this.LastModified = LastModified;
    this.PublicationDate = PublicationDate;
    this.DateCreated = DateCreated;
    this.Title = Title;
    this.Provider = Provider;
    this.Biography = Biography;
  }

}



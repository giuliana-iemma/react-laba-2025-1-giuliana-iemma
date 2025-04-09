//Define a Serializable Class
//Add a method serialize ()
//Add a static method  wakeFrom(serialized) that reconstructs the instance

//RULES
/**
 * Can turn any subclass instance into a serialized string
 * Can reconstruct the original instance (with correct class and property values)
 * Supports null, object, array, string, number, Date
 * Excludes non-enumerable properties and methods
 * Validates the class on deserialization
 */

class Serializable {
  serialize() {
    // console.log(this.constructor.name);
    // console.log(Object.keys(this));

    //We get prepare the object to receive the data
    const data = {
      __class: this.constructor.name,
      props: {},
    };

    //We get the props
    for (const key of Object.keys(this)) {
      // console.log(key);
      // console.log(this[key])

      data.props[key] = Serializable._serializeValue(this[key]);
    }
    console.log(data);

    //Returns string
    return JSON.stringify(data);
  }

  //Function to check the type of value
  static _serializeValue(value) {
    //It's static because it will be used by the class itself and not by one specific object
    //This function will be applied on every property inside the object when running serialize
    //Check the type
    let __type = typeof value;
    console.log(__type);

    //Transform into a version that can go into string
    if (value === null) {
      return null;
    } else if (Array.isArray(value)) {
      //ARRAY
      console.log('Array');

      //Iterate and call serializeValue on it to see each value
      //Use recursion: call the function inside itself
      return value.map((item) => Serializable._serializeValue(item));
    } else if (value instanceof Date) {
      //DATE
      console.log('Date');

      //Convert to  String and return
      return { __type: 'Date', value: value.toISOString() };
    } else if (__type === 'object') {
      //We are sure it's not an array or null, so it's an object
      //OBJECT
      console.log('Object');
      const result = {};

      for (const key of Object.keys(value)) {
        //We iterate over the object and apply serializeValue on each key
        //We save each in the result
        result[key] = Serializable._serializeValue(value[key]);
      }
      console.log(result);
      return result;
    } else if (__type === 'number') {
      //NUMBER
      //Check for weird numbers
      if (Object.is(value, -0)) {
        console.log('-0');
        return 0;
      } else if (Number.isNaN(value)) {
        console.log('isNaN');
        return { __type: 'NaN' };
      } else if (value === Infinity) {
        return { __type: 'Infinity' };
      } else if (value === -Infinity) {
        return { __type: '-Infinity' };
      } else {
        //Normal number, just return it
        return value;
      }
    } else {
      //May be string or boolean, totally string conversion approved
      return value;
    }
  }

  static _deserializeValue(serializedValue) {
    if (serializedValue === null) {
      return null;
    } else if (typeof serializedValue === 'object' && serializedValue.__type) {
      //This means ths is a Date or a non-regular number
      switch (serializedValue.__type) {
        //We had saved this __type before when we serialized
        case 'Date':
          return new Date(serializedValue.value);
        case 'NaN':
          return NaN;
        case 'Infinity':
          return Infinity;
        case '-Infinity':
          return -Infinity;
      }
    } else if (Array.isArray(serializedValue)) {
      return serializedValue.map((item) => Serializable._deserializeValue(item));
    } else if (typeof serializedValue === 'object') {
      const result = {};
      for (const key in serializedValue) {
        result[key] = Serializable._deserializeValue(serializedValue[key]);
      }
      return result;
    } else {
      //string or boolean
      return serializedValue;
    }
  }

  static wakeFrom(serialized) {
    //Returns new object of the right class or throws an error if it's not possible

    // Turn the string back into an object
    let parsed = JSON.parse(serialized);

    //Validate
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      parsed.__class !== this.name ||
      typeof parsed.props !== 'object'
    ) {
      //Stop the program
      throw new Error('Invalid serialized format or class mismatch');
    }

    //Find the props first and deserialize them
    const rawProps = parsed.props;
    const processedProps = {};

    for (const key in rawProps) {
      processedProps[key] = Serializable._deserializeValue(rawProps[key]);
    }

    console.log(parsed);
    console.log('props', processedProps);

    if (!processedProps || typeof processedProps !== 'object') {
      throw new Error('Invalid processedProps passed to constructor');
    }
    //Create a new instance of this class
    const instance = new this(processedProps);

    console.log(instance);
    return instance;
  }
}

/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo; //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
console.log(tolik);

const serialized = tolik.serialize();
console.log(serialized);
console.log(JSON.parse(serialized));

tolik = null;

const resurrectedTolik = UserDTO.wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class

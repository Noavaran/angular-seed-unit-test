'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

    //describe('A spec suite', function() {
    //  it('contains passing specs', function() {
    //    var value = 10,
    //        another_value = value;
    //    expect(value).toBe(another_value);
    //    expect(value).not.toBe(null);
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 10;
    //    expect(value).toEqual(10);
    //    });
    //  });
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = "<h2>Header element: welcome</h2>";
    //    expect(value).toMatch(/welcome/);
    //    expect(value).toMatch('welcome');
    //    expect(value).not.toMatch('goodbye');
    //    });
    //  });
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 10,
    //        undefined_value = undefined;
    //    expect(value).toBeDefined();
    //    expect(undefined_value).not.toBeDefined();
    //    });
    //  });
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 10,
    //        undefined_value = undefined;
    //    expect(undefined_value).toBeUndefined();
    //    expect(value).not.toBeUndefined();
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = null,
    //        not_null_value = 10;
    //    expect(value).toBeNull();
    //    expect(not_null_value).not.toBeNull();
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 'sss10',
    //        undefined_value;
    //    expect(value).toBeTruthy();
    //    expect(undefined_value).not.toBeTruthy();
    //    });
    //  });
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 10,
    //        undefined_value;
    //    expect(undefined_value).toBeFalsy();
    //    expect(value).not.toBeFalsy();
    //    });
    //  });
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var arr = [1,2,3,4];
    //    expect(arr).toContain(4);
    //    expect(arr).not.toContain(12);
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 10;
    //    expect(value).toBeLessThan(11);
    //    expect(value).not.toBeLessThan(5);
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 30;
    //    expect(value).toBeGreaterThan(29);
    //    expect(value).not.toBeGreaterThan(31);
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    var value = 30.02;
    //    expect(value).toBeCloseTo(30, 0.99);
    //    expect(value).not.toBeCloseTo(31, 2);
    //    });
    //  });
    //
    //
    //describe('A spec suite', function() {
    //  it('contains a passing spec', function() {
    //    expect(function() {
    //      return p + 10;
    //      }).toThrow();
    //    expect(function() {
    //      return 2 + 10;
    //      }).not.toThrow();
    //    });
    //  });

    //
    //describe('A spec suite', function() {
    //  this.addMatcher({
    //    toBeLessThanOrEqual: function(expected) {
    //    return this.actual <= expected;
    //    }
    //  });
    //  });


    //
    //describe('A spec suite', function() {
    //  var message;
    //  beforeEach(function() {
    //    message = "hello ";
    //    });
    //  it('should say hello world', function() {
    //    expect(message + "world").toEqual("hello world");
    //    });
    //  it('should say hello ari', function() {
    //    expect(message + "ari").toEqual("hello ari");
    //    });
    //  });


    //describe('A spec suite', function() {
    //  var count;
    //
    //  afterEach(function() {
    //    count = 0;
    //    });
    //  it('should add one to count', function(count) {
    //
    //    count += 1;
    //    expect(count).toEqual(1);
    //  });
    //  it('should check for the reset value', function() {
    //    expect(count).toEqual(0);
    //    });
    //  });
  });
});
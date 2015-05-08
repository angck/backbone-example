var Config, MainPage, PostPage;

Config = {
  baseurl: "http://127.0.0.1:9000/#",
  sitetitle: "learning yeoman",
  sitedesc: " a starting point for a modern angular.js application.",
  sitecopy: "2014 Copywrite",
  version: '0.0.1',
  email: "admin@email.com",
  debug: true,
  feature: {
    title: 'Chapter 3',
    image: 'http://a481ab4f6ea4dd65cff0-b2b68ced242ecf1cb9bc1021688e3775.r49.cf1.rackcdn.com/img/learning-yeoman/yo-ng.png',
    body: 'A starting point for a modern angular.js application.'
  },
  features: [
    {
      id: 1,
      title: "HTML5",
      body: "Using HTML5 for better user experience.",
      image: "http://a481ab4f6ea4dd65cff0-b2b68ced242ecf1cb9bc1021688e3775.r49.cf1.rackcdn.com/img/learning-yeoman/feature-html5.png"
    }, {
      id: 2
    }, {
      title: "AngularJS",
      body: "Framework of choice is Angular",
      image: "http://a481ab4f6ea4dd65cff0-b2b68ced242ecf1cb9bc1021688e3775.r49.cf1.rackcdn.com/img/learning-yeoman/feature-angular.png"
    }, {
      id: 3
    }, {
      title: "Twitter Bootstrap",
      body: "UI is Twitter Bootstrap 3.0.",
      image: "http://a481ab4f6ea4dd65cff0-b2b68ced242ecf1cb9bc1021688e3775.r49.cf1.rackcdn.com/img/learning-yeoman/feature-bootstrap.png"
    }
  ],
  session: {
    authorized: false,
    user: null
  },
  layout: {
    header: "views/_header.html",
    sidebar: "views/_sidebar.html",
    content: "views/_content.html",
    footer: "views/_footer.html",
    menu: [
      {
        title: "Home",
        href: "/",
        title: "About",
        href: "/about",
        title: "Posts",
        href: "/posts"
      }
    ]
  }
};

MainPage = function() {
  this.sitetitle = element(protractor.By.binding("App.sitetitle"));
  this.featureTitle = element(protractor.By.binding("App.feature.title"));
  this.featureDesc = element(protractor.By.binding("App.feature.body"));
  this.features = element(protractor.By.binding("App.features"));
  this.get = function() {
    return browser.get(Config.baseurl);
  };
  return this.name = 'MainPage';
};

PostPage = function() {
  this.url = Config.baseurl + '/posts';
  this.title = element(protractor.By.model('post.title'));
  this.body = element(protractor.By.model('post.body'));
  this.image = element(protractor.By.model('post.image'));
  this.tags = element(protractor.By.model('post.tags'));
  this.published = element(protractor.By.model('post.published'));
  this.submitBtn = element(protractor.By.css('button[type="submit"]'));
  this.addBtn = element(protractor.By.partialButtonText('Add New'));
  this.get = function() {
    return browser.get(this.url);
  };
  this.getNew = function() {
    this.get();
    browser.sleep(1000);
    return this.addBtn.click();
  };
  this.getEdit = function(id) {
    return browser.get(Config.baseurl + '/posts/edit/' + id);
  };
  this.form = function(p) {
    this.title.sendKeys(p.title);
    this.body.sendKeys(p.body);
    this.image.sendKeys(p.image);
    this.tags.sendKeys(p.tags);
    return this.submitBtn.click();
  };
  return this.name = 'PostEditPage';
};

describe('Learning Yeoman - Chapter 3 e2e:', function() {
  describe("the main page", function() {
    var mainPage;
    mainPage = new MainPage();
    beforeEach(function() {
      return mainPage.get();
    });
    return it("should have site title, feature title, image and description", function() {
      expect(mainPage.sitetitle.getText()).toEqual(Config.sitetitle);
      expect(mainPage.featureTitle.getText()).toEqual(Config.feature.title);
      return expect(mainPage.featureDesc.getText()).toEqual(Config.feature.body);
    });
  });
  return describe('the new post page', function() {
    var postPage;
    postPage = new PostPage();
    beforeEach(function() {
      return postPage.get();
    });
    return it('should create a post', function() {
      postPage.addBtn.click();
      postPage.form({
        title: 'Test',
        body: 'Test post body',
        tags: 'protractor,test',
        image: ''
      });
      browser.sleep(1500);
      return expect(browser.getCurrentUrl()).toEqual(Config.baseurl + '/posts');
    });
  });
});

/*
//@ sourceMappingURL=app.js.map
*/
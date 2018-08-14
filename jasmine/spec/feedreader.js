/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {
        /* Check if 'allFeeds' is defined and not to be 0 */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*All feeds have to have URL, which is't empty and long than 0*/
        it('URL are defined and arent empty', function(){
               for(feed of allFeeds){
                   expect(feed.url).toBeDefined();
                   expect(feed.url).not.toBe('');
                   expect(feed.url.length).not.toBe(0);
               }
            });


        /*All feeds have to have Name, which is't empty and long than 0*/
        it('name of feed is defined and isnt empty', function(){
            for(feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
                expect(feed.name.length).not.toBe(0);
            }
        });
    });



    describe('The menu',function(){

        /*Check if menu is hidden by default*/
        it('has class',function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })

        /*Check if 'click' on menu icon shows and hide menu*/
        it('toggle visibility on click', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })
    });



    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('has a least a single .entry element within the .feed container', function(done) {
            //expects that there is at least one entry
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var oldContent
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = $(".feed").html();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('changes content when is clicked other link', function(done) {
            var newContent = $(".feed").html();
            expect(newContent).not.toBe(oldContent);
            done();
        });

    });
}());

! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    function i() {
        var b, c, d = {
            height: f.innerHeight,
            width: f.innerWidth
        };
        return d.height || (b = e.compatMode, (b || !a.support.boxModel) && (c = "CSS1Compat" === b ? g : e.body, d = {
            height: c.clientHeight,
            width: c.clientWidth
        })), d
    }

    function j() {
        return {
            top: f.pageYOffset || g.scrollTop || e.body.scrollTop,
            left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft
        }
    }

    function k() {
        if (b.length) {
            var e = 0,
                f = a.map(b, function(a) {
                    var b = a.data.selector,
                        c = a.$element;
                    return b ? c.find(b) : c
                });
            for (c = c || i(), d = d || j(); e < b.length; e++)
                if (a.contains(g, f[e][0])) {
                    var h = a(f[e]),
                        k = {
                            height: h[0].offsetHeight,
                            width: h[0].offsetWidth
                        },
                        l = h.offset(),
                        m = h.data("inview");
                    if (!d || !c) return;
                    l.top + k.height > d.top && l.top < d.top + c.height && l.left + k.width > d.left && l.left < d.left + c.width ? m || h.data("inview", !0).trigger("inview", [!0]) : m && h.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var c, d, h, b = [],
        e = document,
        f = window,
        g = e.documentElement;
    a.event.special.inview = {
        add: function(c) {
            b.push({
                data: c,
                $element: a(this),
                element: this
            }), !h && b.length && (h = setInterval(k, 250))
        },
        remove: function(a) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.element === this && d.data.guid === a.guid) {
                    b.splice(c, 1);
                    break
                }
            }
            b.length || (clearInterval(h), h = null)
        }
    }, a(f).on("scroll resize scrollstop", function() {
        c = d = null
    }), !g.addEventListener && g.attachEvent && g.attachEvent("onfocusin", function() {
        d = null
    })
});


var $j = jQuery.noConflict();

function crestcomInteractiveIconShowcase() {
    var interactiveShowcase = $j('.crestcom-int-icon-showcase-player'),
        noAnimationOnTouch = $j('.no_animation_on_touch');

    if (interactiveShowcase.length) {
        interactiveShowcase.each(function() {
            var thisShowcase = $j(this),
                iconHolders = thisShowcase.find('.crestcom-showcase-item-holder'),
                thisIcons = thisShowcase.find('.crestcom-showcase-icon'),
                thisParent = thisShowcase.parents('#cc-wheel-row'),
                thisContent = thisShowcase.find('.crestcom-showcase-content'),
                thisFirstItem = thisShowcase.find('.crestcom-showcase-item-holder:first-child'),
                thisActiveItem = thisShowcase.find('.crestcom-showcase-item-holder.crestcom-showcase-active'),
                isInitialized = false,
                isPaused = false,
                currentItem,
                itemInterval = 3000,
                numberOfItems = iconHolders.length;

            if (typeof thisShowcase.data('interval') !== 'undefined' && thisShowcase.data('interval') !== false) {
                itemInterval = thisShowcase.data('interval');
            }

            if (!noAnimationOnTouch.length) {
                //appear
                thisShowcase.one('inview', function(event, isInView) {
                    if (isInView) {
                        setTimeout(function() {
                            thisShowcase.addClass('crestcom-appeared');
                            thisShowcase.addClass('no_animation_on_touch');
                            if (!thisActiveItem.length) {
                                //	setTimeout(function(){
                                isInitialized = true;
                                thisFirstItem.addClass('crestcom-showcase-active');
                                thisParent.attr('data-target', 'num1-active');
                                if (thisShowcase.hasClass('crestcom-autoplay')) {
                                    showcaseLoop();
                                    thisShowcase.hover(function(e) {
                                        isPaused = true;
                                    }, function(e) {
                                        isPaused = false;
                                    });
                                }
                                //	},2500);
                            }
                        }, 400);
                    }
                });
            } else {
                thisFirstItem.addClass('crestcom-showcase-active');
                thisParent.attr('data-target', 'num1-active');
                isInitialized = true;
            }

            //hover actions
            thisIcons.each(function() {
                var thisIcon = $j(this),
                    thisHolder = thisIcon.parent(),
                    thisIconTarget = thisHolder.attr('data-item');


                thisIcon.mouseenter(function() {
                    if (isInitialized == true) {
                        thisHolder.siblings().removeClass('crestcom-showcase-active crestcom-current');
                        thisHolder.addClass('crestcom-showcase-active crestcom-current');
                        thisParent.attr('data-target', thisIconTarget);
                        currentItem = thisShowcase.find('.crestcom-current').index(); //reset current loop item to latest hovered item
                        //bold the right list title
                        var thisListBold = iconHolders.eq(currentItem).data('num');
                        $j('.skillList li').css('font-weight', '400');
                        $j('.' + thisListBold).css('font-weight', '800');
                    }
                });
            });

            //hover action function -- to be used with new list of skills (a copy of above)
            function hoverList(itemNum) {
                var className = ".crestcom-showcase-item-holder:nth-child(" + itemNum + ")";
                thisIcon = $j(className),
                    thisHolder = thisIcon,
                    thisIconTarget = thisHolder.attr('data-item');

                if (isInitialized == true) {
                    thisHolder.siblings().removeClass('crestcom-showcase-active crestcom-current');
                    thisHolder.addClass('crestcom-showcase-active crestcom-current');
                    thisParent.attr('data-target', thisIconTarget);
                    currentItem = thisShowcase.find('.crestcom-current').index(); //reset current loop item to latest hovered item
                }
            };

            jQuery(".skillList li").hover(function() {
                $j('.skillList li').css('font-weight', '400');
                $j(this).css('font-weight', '800');
                isPaused = true;
            }, function(e) {
                isPaused = false;
                $j(this).css('font-weight', '400');
            });

            jQuery(".skillComm").hover(function() {
                hoverList(1);
            });

            jQuery(".skillFocus").hover(function() {
                hoverList(2);
            });
            jQuery(".skillDecision").hover(function() {
                hoverList(3);
            });
            jQuery(".skillDelegation").hover(function() {
                hoverList(4);
            });
            jQuery(".skillTeams").hover(function() {
                hoverList(5);
            });
            jQuery(".skillLead").hover(function() {
                hoverList(6);
            });
            jQuery(".skillTime").hover(function() {
                hoverList(7);
            });
            jQuery(".skillNego").hover(function() {
                hoverList(8);
            });
            jQuery(".skillPlan").hover(function() {
                hoverList(9);
            });
            jQuery(".skillProb").hover(function() {
                hoverList(10);
            });
            jQuery(".skillRecruiting").hover(function() {
                hoverList(11);
            });
            jQuery(".skillThink").hover(function() {
                hoverList(12);
            });


            //loop through the items
            function showcaseLoop() {
                currentItem = 0; //start from the first item, index = 0

                var loop = setInterval(function() {
                    if (!isPaused) {
                        iconHolders.removeClass('crestcom-showcase-active crestcom-current');
                        if (currentItem == numberOfItems - 1) {
                            currentItem = 0;
                        } else {
                            currentItem++;
                        }
                        iconHolders.eq(currentItem).addClass('crestcom-showcase-active');
                        var currentItemT = currentItem + 1;
                        var currentTarget = 'num' + currentItemT + '-active';
                        thisParent.attr('data-target', currentTarget);
                        //bold the right list title
                        var thisListBold = iconHolders.eq(currentItem).data('num');
                        $j('.skillList li').css('font-weight', '400');
                        $j('.' + thisListBold).css('font-weight', '800');
                    }
                }, itemInterval);
            }
        });
    }
}


$j(function() {
    //$j('.crestcom-int-icon-showcase').addClass('crestcom-appeared');
    crestcomInteractiveIconShowcase();
});
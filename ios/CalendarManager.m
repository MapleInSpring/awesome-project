//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by Pivotal on 20/6/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@ when %@", name, location, date);
}

- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}
@end

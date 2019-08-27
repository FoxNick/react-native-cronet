//
//  RCTCronetHTTPRequestHandler.h
//  RNCronet
//
//  Created by Akshet Pandey on 8/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTInvalidating.h>
#import <React/RCTURLRequestHandler.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^CronetBuilderBlock)(void);

@interface RCTCronetHTTPRequestHandler : NSObject <RCTURLRequestHandler, RCTInvalidating>

+ (void)setCustomCronetEngineBuilder:(CronetBuilderBlock)block;

@end

NS_ASSUME_NONNULL_END

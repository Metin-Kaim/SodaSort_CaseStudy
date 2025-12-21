var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.JointSpring' )
  var i1129 = data
  i1128.spring = i1129[0]
  i1128.damper = i1129[1]
  i1128.targetPosition = i1129[2]
  return i1128
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.JointMotor' )
  var i1131 = data
  i1130.m_TargetVelocity = i1131[0]
  i1130.m_Force = i1131[1]
  i1130.m_FreeSpin = i1131[2]
  return i1130
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.JointLimits' )
  var i1133 = data
  i1132.m_Min = i1133[0]
  i1132.m_Max = i1133[1]
  i1132.m_Bounciness = i1133[2]
  i1132.m_BounceMinVelocity = i1133[3]
  i1132.m_ContactDistance = i1133[4]
  i1132.minBounce = i1133[5]
  i1132.maxBounce = i1133[6]
  return i1132
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.JointDrive' )
  var i1135 = data
  i1134.m_PositionSpring = i1135[0]
  i1134.m_PositionDamper = i1135[1]
  i1134.m_MaximumForce = i1135[2]
  i1134.m_UseAcceleration = i1135[3]
  return i1134
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1137 = data
  i1136.m_Spring = i1137[0]
  i1136.m_Damper = i1137[1]
  return i1136
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1139 = data
  i1138.m_Limit = i1139[0]
  i1138.m_Bounciness = i1139[1]
  i1138.m_ContactDistance = i1139[2]
  return i1138
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1141 = data
  i1140.m_ExtremumSlip = i1141[0]
  i1140.m_ExtremumValue = i1141[1]
  i1140.m_AsymptoteSlip = i1141[2]
  i1140.m_AsymptoteValue = i1141[3]
  i1140.m_Stiffness = i1141[4]
  return i1140
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1143 = data
  i1142.m_LowerAngle = i1143[0]
  i1142.m_UpperAngle = i1143[1]
  return i1142
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1145 = data
  i1144.m_MotorSpeed = i1145[0]
  i1144.m_MaximumMotorTorque = i1145[1]
  return i1144
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1147 = data
  i1146.m_DampingRatio = i1147[0]
  i1146.m_Frequency = i1147[1]
  i1146.m_Angle = i1147[2]
  return i1146
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1149 = data
  i1148.m_LowerTranslation = i1149[0]
  i1148.m_UpperTranslation = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1151 = data
  i1150.position = new pc.Vec3( i1151[0], i1151[1], i1151[2] )
  i1150.scale = new pc.Vec3( i1151[3], i1151[4], i1151[5] )
  i1150.rotation = new pc.Quat(i1151[6], i1151[7], i1151[8], i1151[9])
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1153 = data
  i1152.color = new pc.Color(i1153[0], i1153[1], i1153[2], i1153[3])
  request.r(i1153[4], i1153[5], 0, i1152, 'sprite')
  i1152.flipX = !!i1153[6]
  i1152.flipY = !!i1153[7]
  i1152.drawMode = i1153[8]
  i1152.size = new pc.Vec2( i1153[9], i1153[10] )
  i1152.tileMode = i1153[11]
  i1152.adaptiveModeThreshold = i1153[12]
  i1152.maskInteraction = i1153[13]
  i1152.spriteSortPoint = i1153[14]
  i1152.enabled = !!i1153[15]
  request.r(i1153[16], i1153[17], 0, i1152, 'sharedMaterial')
  var i1155 = i1153[18]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 2, i1154, '')
  }
  i1152.sharedMaterials = i1154
  i1152.receiveShadows = !!i1153[19]
  i1152.shadowCastingMode = i1153[20]
  i1152.sortingLayerID = i1153[21]
  i1152.sortingOrder = i1153[22]
  i1152.lightmapIndex = i1153[23]
  i1152.lightmapSceneIndex = i1153[24]
  i1152.lightmapScaleOffset = new pc.Vec4( i1153[25], i1153[26], i1153[27], i1153[28] )
  i1152.lightProbeUsage = i1153[29]
  i1152.reflectionProbeUsage = i1153[30]
  return i1152
}

Deserializers["LiquidStackController"] = function (request, data, root) {
  var i1158 = root || request.c( 'LiquidStackController' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'bottle')
  var i1161 = i1159[2]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 1, i1160, '')
  }
  i1158.blocks = i1160
  var i1163 = i1159[3]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(i1163[i + 0]);
  }
  i1158.heights = i1162
  i1158.curve = new pc.AnimationCurve( { keys_flow: i1159[4] } )
  request.r(i1159[5], i1159[6], 0, i1158, 'bottleHandler')
  var i1165 = i1159[7]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('PourAngles')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('PourAngles', i1165[i + 0]));
  }
  i1158.pourAnglesList = i1164
  var i1167 = i1159[8]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1158.spriteRenderers = i1166
  var i1169 = i1159[9]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(i1169[i + 0]);
  }
  i1158.pourAmounts = i1168
  var i1171 = i1159[10]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1171.length; i += 2) {
    i1170.add(new pc.Vec2( i1171[i + 0], i1171[i + 1] ));
  }
  i1158.fillAmounts = i1170
  i1158.rotateToFirstAngleDuration = i1159[11]
  i1158.rotateToSecondAngleDuration = i1159[12]
  i1158.delayBeforePouring = i1159[13]
  return i1158
}

Deserializers["PourAngles"] = function (request, data, root) {
  var i1178 = root || request.c( 'PourAngles' )
  var i1179 = data
  i1178.angle1 = i1179[0]
  i1178.angle2 = i1179[1]
  return i1178
}

Deserializers["Assets.SodaPlayable.Scripts.BottleHandler"] = function (request, data, root) {
  var i1184 = root || request.c( 'Assets.SodaPlayable.Scripts.BottleHandler' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('Assets.SodaPlayable.Scripts.ColorType')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(i1187[i + 0]);
  }
  i1184.colorTypes = i1186
  i1184.bottleIndex = i1185[1]
  request.r(i1185[2], i1185[3], 0, i1184, 'leftPourPoint')
  request.r(i1185[4], i1185[5], 0, i1184, 'rightPourPoint')
  request.r(i1185[6], i1185[7], 0, i1184, 'stackController')
  var i1189 = i1185[8]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1184.sprites = i1188
  i1184.selectionAnimHeight = i1185[9]
  i1184.selectionAnimDuration = i1185[10]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1193 = data
  i1192.usedByComposite = !!i1193[0]
  i1192.autoTiling = !!i1193[1]
  i1192.size = new pc.Vec2( i1193[2], i1193[3] )
  i1192.edgeRadius = i1193[4]
  i1192.enabled = !!i1193[5]
  i1192.isTrigger = !!i1193[6]
  i1192.usedByEffector = !!i1193[7]
  i1192.density = i1193[8]
  i1192.offset = new pc.Vec2( i1193[9], i1193[10] )
  request.r(i1193[11], i1193[12], 0, i1192, 'material')
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.tagId = i1195[1]
  i1194.enabled = !!i1195[2]
  i1194.isStatic = !!i1195[3]
  i1194.layer = i1195[4]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'animatorController')
  request.r(i1197[2], i1197[3], 0, i1196, 'avatar')
  i1196.updateMode = i1197[4]
  i1196.hasTransformHierarchy = !!i1197[5]
  i1196.applyRootMotion = !!i1197[6]
  var i1199 = i1197[7]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1196.humanBones = i1198
  i1196.enabled = !!i1197[8]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1203 = data
  i1202.frontSortingLayerID = i1203[0]
  i1202.frontSortingOrder = i1203[1]
  i1202.backSortingLayerID = i1203[2]
  i1202.backSortingOrder = i1203[3]
  i1202.alphaCutoff = i1203[4]
  request.r(i1203[5], i1203[6], 0, i1202, 'sprite')
  i1202.tileMode = i1203[7]
  i1202.isCustomRangeActive = !!i1203[8]
  i1202.spriteSortPoint = i1203[9]
  i1202.enabled = !!i1203[10]
  request.r(i1203[11], i1203[12], 0, i1202, 'sharedMaterial')
  var i1205 = i1203[13]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 2) {
  request.r(i1205[i + 0], i1205[i + 1], 2, i1204, '')
  }
  i1202.sharedMaterials = i1204
  i1202.receiveShadows = !!i1203[14]
  i1202.shadowCastingMode = i1203[15]
  i1202.sortingLayerID = i1203[16]
  i1202.sortingOrder = i1203[17]
  i1202.lightmapIndex = i1203[18]
  i1202.lightmapSceneIndex = i1203[19]
  i1202.lightmapScaleOffset = new pc.Vec4( i1203[20], i1203[21], i1203[22], i1203[23] )
  i1202.lightProbeUsage = i1203[24]
  i1202.reflectionProbeUsage = i1203[25]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1206 = root || new pc.UnityMaterial()
  var i1207 = data
  i1206.name = i1207[0]
  request.r(i1207[1], i1207[2], 0, i1206, 'shader')
  i1206.renderQueue = i1207[3]
  i1206.enableInstancing = !!i1207[4]
  var i1209 = i1207[5]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1209[i + 0]) );
  }
  i1206.floatParameters = i1208
  var i1211 = i1207[6]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1211[i + 0]) );
  }
  i1206.colorParameters = i1210
  var i1213 = i1207[7]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1213[i + 0]) );
  }
  i1206.vectorParameters = i1212
  var i1215 = i1207[8]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1215[i + 0]) );
  }
  i1206.textureParameters = i1214
  var i1217 = i1207[9]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1217[i + 0]) );
  }
  i1206.materialFlags = i1216
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.value = i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.value = new pc.Color(i1225[1], i1225[2], i1225[3], i1225[4])
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1229 = data
  i1228.name = i1229[0]
  i1228.value = new pc.Vec4( i1229[1], i1229[2], i1229[3], i1229[4] )
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1233 = data
  i1232.name = i1233[0]
  request.r(i1233[1], i1233[2], 0, i1232, 'value')
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.enabled = !!i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.width = i1239[1]
  i1238.height = i1239[2]
  i1238.mipmapCount = i1239[3]
  i1238.anisoLevel = i1239[4]
  i1238.filterMode = i1239[5]
  i1238.hdr = !!i1239[6]
  i1238.format = i1239[7]
  i1238.wrapMode = i1239[8]
  i1238.alphaIsTransparency = !!i1239[9]
  i1238.alphaSource = i1239[10]
  i1238.graphicsFormat = i1239[11]
  i1238.sRGBTexture = !!i1239[12]
  i1238.desiredColorSpace = i1239[13]
  i1238.wrapU = i1239[14]
  i1238.wrapV = i1239[15]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.index = i1241[1]
  i1240.startup = !!i1241[2]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1243 = data
  i1242.aspect = i1243[0]
  i1242.orthographic = !!i1243[1]
  i1242.orthographicSize = i1243[2]
  i1242.backgroundColor = new pc.Color(i1243[3], i1243[4], i1243[5], i1243[6])
  i1242.nearClipPlane = i1243[7]
  i1242.farClipPlane = i1243[8]
  i1242.fieldOfView = i1243[9]
  i1242.depth = i1243[10]
  i1242.clearFlags = i1243[11]
  i1242.cullingMask = i1243[12]
  i1242.rect = i1243[13]
  request.r(i1243[14], i1243[15], 0, i1242, 'targetTexture')
  i1242.usePhysicalProperties = !!i1243[16]
  i1242.focalLength = i1243[17]
  i1242.sensorSize = new pc.Vec2( i1243[18], i1243[19] )
  i1242.lensShift = new pc.Vec2( i1243[20], i1243[21] )
  i1242.gateFit = i1243[22]
  i1242.commandBufferCount = i1243[23]
  i1242.cameraType = i1243[24]
  i1242.enabled = !!i1243[25]
  return i1242
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1245 = data
  i1244.m_RenderShadows = !!i1245[0]
  i1244.m_RequiresDepthTextureOption = i1245[1]
  i1244.m_RequiresOpaqueTextureOption = i1245[2]
  i1244.m_CameraType = i1245[3]
  var i1247 = i1245[4]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1244.m_Cameras = i1246
  i1244.m_RendererIndex = i1245[5]
  i1244.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1245[6] )
  request.r(i1245[7], i1245[8], 0, i1244, 'm_VolumeTrigger')
  i1244.m_VolumeFrameworkUpdateModeOption = i1245[9]
  i1244.m_RenderPostProcessing = !!i1245[10]
  i1244.m_Antialiasing = i1245[11]
  i1244.m_AntialiasingQuality = i1245[12]
  i1244.m_StopNaN = !!i1245[13]
  i1244.m_Dithering = !!i1245[14]
  i1244.m_ClearDepth = !!i1245[15]
  i1244.m_AllowXRRendering = !!i1245[16]
  i1244.m_AllowHDROutput = !!i1245[17]
  i1244.m_UseScreenCoordOverride = !!i1245[18]
  i1244.m_ScreenSizeOverride = new pc.Vec4( i1245[19], i1245[20], i1245[21], i1245[22] )
  i1244.m_ScreenCoordScaleBias = new pc.Vec4( i1245[23], i1245[24], i1245[25], i1245[26] )
  i1244.m_RequiresDepthTexture = !!i1245[27]
  i1244.m_RequiresColorTexture = !!i1245[28]
  i1244.m_Version = i1245[29]
  i1244.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1245[30], i1244.m_TaaSettings)
  return i1244
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1251 = data
  i1250.m_Quality = i1251[0]
  i1250.m_FrameInfluence = i1251[1]
  i1250.m_JitterScale = i1251[2]
  i1250.m_MipBias = i1251[3]
  i1250.m_VarianceClampScale = i1251[4]
  i1250.m_ContrastAdaptiveSharpening = i1251[5]
  return i1250
}

Deserializers["Assets.SodaPlayable.Scripts.BottleSpawnController"] = function (request, data, root) {
  var i1252 = root || request.c( 'Assets.SodaPlayable.Scripts.BottleSpawnController' )
  var i1253 = data
  i1252.gridSize = new pc.Vec2( i1253[0], i1253[1] )
  i1252.xDistance = i1253[2]
  i1252.yDistance = i1253[3]
  var i1255 = i1253[4]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('Assets.SodaPlayable.Scripts.BottleData')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('Assets.SodaPlayable.Scripts.BottleData', i1255[i + 0]));
  }
  i1252.bottleDatas = i1254
  request.r(i1253[5], i1253[6], 0, i1252, 'bottlePrefab')
  return i1252
}

Deserializers["Assets.SodaPlayable.Scripts.BottleData"] = function (request, data, root) {
  var i1258 = root || request.c( 'Assets.SodaPlayable.Scripts.BottleData' )
  var i1259 = data
  i1258.color1 = i1259[0]
  i1258.color2 = i1259[1]
  i1258.color3 = i1259[2]
  i1258.color4 = i1259[3]
  return i1258
}

Deserializers["Assets.SodaPlayable.Scripts.InputController"] = function (request, data, root) {
  var i1260 = root || request.c( 'Assets.SodaPlayable.Scripts.InputController' )
  var i1261 = data
  i1260.bottleLayer = UnityEngine.LayerMask.FromIntegerValue( i1261[0] )
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1263 = data
  i1262.ambientIntensity = i1263[0]
  i1262.reflectionIntensity = i1263[1]
  i1262.ambientMode = i1263[2]
  i1262.ambientLight = new pc.Color(i1263[3], i1263[4], i1263[5], i1263[6])
  i1262.ambientSkyColor = new pc.Color(i1263[7], i1263[8], i1263[9], i1263[10])
  i1262.ambientGroundColor = new pc.Color(i1263[11], i1263[12], i1263[13], i1263[14])
  i1262.ambientEquatorColor = new pc.Color(i1263[15], i1263[16], i1263[17], i1263[18])
  i1262.fogColor = new pc.Color(i1263[19], i1263[20], i1263[21], i1263[22])
  i1262.fogEndDistance = i1263[23]
  i1262.fogStartDistance = i1263[24]
  i1262.fogDensity = i1263[25]
  i1262.fog = !!i1263[26]
  request.r(i1263[27], i1263[28], 0, i1262, 'skybox')
  i1262.fogMode = i1263[29]
  var i1265 = i1263[30]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1265[i + 0]) );
  }
  i1262.lightmaps = i1264
  i1262.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1263[31], i1262.lightProbes)
  i1262.lightmapsMode = i1263[32]
  i1262.mixedBakeMode = i1263[33]
  i1262.environmentLightingMode = i1263[34]
  i1262.ambientProbe = new pc.SphericalHarmonicsL2(i1263[35])
  i1262.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1263[36])
  i1262.useReferenceAmbientProbe = !!i1263[37]
  request.r(i1263[38], i1263[39], 0, i1262, 'customReflection')
  request.r(i1263[40], i1263[41], 0, i1262, 'defaultReflection')
  i1262.defaultReflectionMode = i1263[42]
  i1262.defaultReflectionResolution = i1263[43]
  i1262.sunLightObjectId = i1263[44]
  i1262.pixelLightCount = i1263[45]
  i1262.defaultReflectionHDR = !!i1263[46]
  i1262.hasLightDataAsset = !!i1263[47]
  i1262.hasManualGenerate = !!i1263[48]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'lightmapColor')
  request.r(i1269[2], i1269[3], 0, i1268, 'lightmapDirection')
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1270 = root || new UnityEngine.LightProbes()
  var i1271 = data
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1279 = data
  i1278.AdditionalLightsPerObjectLimit = i1279[0]
  i1278.AdditionalLightsRenderingMode = i1279[1]
  i1278.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1279[2], i1278.LightRenderingMode)
  i1278.ColorGradingLutSize = i1279[3]
  i1278.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1279[4], i1278.ColorGradingMode)
  i1278.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1279[5], i1278.MainLightRenderingMode)
  i1278.MainLightRenderingModeValue = i1279[6]
  i1278.SupportsMainLightShadows = !!i1279[7]
  i1278.MixedLightingSupported = !!i1279[8]
  i1278.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1279[9], i1278.MsaaQuality)
  i1278.MSAA = i1279[10]
  i1278.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1279[11], i1278.OpaqueDownsampling)
  i1278.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1279[12], i1278.MainLightShadowmapResolution)
  i1278.MainLightShadowmapResolutionValue = i1279[13]
  i1278.SupportsSoftShadows = !!i1279[14]
  i1278.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1279[15], i1278.SoftShadowQuality)
  i1278.SoftShadowQualityValue = i1279[16]
  i1278.ShadowDistance = i1279[17]
  i1278.ShadowCascadeCount = i1279[18]
  i1278.Cascade2Split = i1279[19]
  i1278.Cascade3Split = new pc.Vec2( i1279[20], i1279[21] )
  i1278.Cascade4Split = new pc.Vec3( i1279[22], i1279[23], i1279[24] )
  i1278.CascadeBorder = i1279[25]
  i1278.ShadowDepthBias = i1279[26]
  i1278.ShadowNormalBias = i1279[27]
  i1278.RenderScale = i1279[28]
  i1278.RequireDepthTexture = !!i1279[29]
  i1278.RequireOpaqueTexture = !!i1279[30]
  i1278.SupportsHDR = !!i1279[31]
  i1278.SupportsTerrainHoles = !!i1279[32]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1281 = data
  i1280.Disabled = i1281[0]
  i1280.PerVertex = i1281[1]
  i1280.PerPixel = i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1283 = data
  i1282.LowDynamicRange = i1283[0]
  i1282.HighDynamicRange = i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1285 = data
  i1284.Disabled = i1285[0]
  i1284._2x = i1285[1]
  i1284._4x = i1285[2]
  i1284._8x = i1285[3]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1287 = data
  i1286.None = i1287[0]
  i1286._2xBilinear = i1287[1]
  i1286._4xBox = i1287[2]
  i1286._4xBilinear = i1287[3]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1289 = data
  i1288._256 = i1289[0]
  i1288._512 = i1289[1]
  i1288._1024 = i1289[2]
  i1288._2048 = i1289[3]
  i1288._4096 = i1289[4]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1291 = data
  i1290.UsePipelineSettings = i1291[0]
  i1290.Low = i1291[1]
  i1290.Medium = i1291[2]
  i1290.High = i1291[3]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1295[i + 0]));
  }
  i1292.ShaderCompilationErrors = i1294
  i1292.name = i1293[1]
  i1292.guid = i1293[2]
  var i1297 = i1293[3]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( i1297[i + 0] );
  }
  i1292.shaderDefinedKeywords = i1296
  var i1299 = i1293[4]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1299[i + 0]) );
  }
  i1292.passes = i1298
  var i1301 = i1293[5]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1301[i + 0]) );
  }
  i1292.usePasses = i1300
  var i1303 = i1293[6]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1303[i + 0]) );
  }
  i1292.defaultParameterValues = i1302
  request.r(i1293[7], i1293[8], 0, i1292, 'unityFallbackShader')
  i1292.readDepth = !!i1293[9]
  i1292.hasDepthOnlyPass = !!i1293[10]
  i1292.isCreatedByShaderGraph = !!i1293[11]
  i1292.disableBatching = !!i1293[12]
  i1292.compiled = !!i1293[13]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1307 = data
  i1306.shaderName = i1307[0]
  i1306.errorMessage = i1307[1]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1312 = root || new pc.UnityShaderPass()
  var i1313 = data
  i1312.id = i1313[0]
  i1312.subShaderIndex = i1313[1]
  i1312.name = i1313[2]
  i1312.passType = i1313[3]
  i1312.grabPassTextureName = i1313[4]
  i1312.usePass = !!i1313[5]
  i1312.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[6], i1312.zTest)
  i1312.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[7], i1312.zWrite)
  i1312.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[8], i1312.culling)
  i1312.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1313[9], i1312.blending)
  i1312.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1313[10], i1312.alphaBlending)
  i1312.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[11], i1312.colorWriteMask)
  i1312.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[12], i1312.offsetUnits)
  i1312.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[13], i1312.offsetFactor)
  i1312.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[14], i1312.stencilRef)
  i1312.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[15], i1312.stencilReadMask)
  i1312.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1313[16], i1312.stencilWriteMask)
  i1312.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1313[17], i1312.stencilOp)
  i1312.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1313[18], i1312.stencilOpFront)
  i1312.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1313[19], i1312.stencilOpBack)
  var i1315 = i1313[20]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1315[i + 0]) );
  }
  i1312.tags = i1314
  var i1317 = i1313[21]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( i1317[i + 0] );
  }
  i1312.passDefinedKeywords = i1316
  var i1319 = i1313[22]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1319[i + 0]) );
  }
  i1312.passDefinedKeywordGroups = i1318
  var i1321 = i1313[23]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1321[i + 0]) );
  }
  i1312.variants = i1320
  var i1323 = i1313[24]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1323[i + 0]) );
  }
  i1312.excludedVariants = i1322
  i1312.hasDepthReader = !!i1313[25]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1325 = data
  i1324.val = i1325[0]
  i1324.name = i1325[1]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1327 = data
  i1326.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1327[0], i1326.src)
  i1326.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1327[1], i1326.dst)
  i1326.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1327[2], i1326.op)
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1329 = data
  i1328.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1329[0], i1328.pass)
  i1328.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1329[1], i1328.fail)
  i1328.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1329[2], i1328.zFail)
  i1328.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1329[3], i1328.comp)
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.value = i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1337 = data
  var i1339 = i1337[0]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1336.keywords = i1338
  i1336.hasDiscard = !!i1337[1]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1343 = data
  i1342.passId = i1343[0]
  i1342.subShaderIndex = i1343[1]
  var i1345 = i1343[2]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( i1345[i + 0] );
  }
  i1342.keywords = i1344
  i1342.vertexProgram = i1343[3]
  i1342.fragmentProgram = i1343[4]
  i1342.exportedForWebGl2 = !!i1343[5]
  i1342.readDepth = !!i1343[6]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1349 = data
  request.r(i1349[0], i1349[1], 0, i1348, 'shader')
  i1348.pass = i1349[2]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.type = i1353[1]
  i1352.value = new pc.Vec4( i1353[2], i1353[3], i1353[4], i1353[5] )
  i1352.textureValue = i1353[6]
  i1352.shaderPropertyFlag = i1353[7]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1355 = data
  i1354.name = i1355[0]
  request.r(i1355[1], i1355[2], 0, i1354, 'texture')
  i1354.aabb = i1355[3]
  i1354.vertices = i1355[4]
  i1354.triangles = i1355[5]
  i1354.textureRect = UnityEngine.Rect.MinMaxRect(i1355[6], i1355[7], i1355[8], i1355[9])
  i1354.packedRect = UnityEngine.Rect.MinMaxRect(i1355[10], i1355[11], i1355[12], i1355[13])
  i1354.border = new pc.Vec4( i1355[14], i1355[15], i1355[16], i1355[17] )
  i1354.transparency = i1355[18]
  i1354.bounds = i1355[19]
  i1354.pixelsPerUnit = i1355[20]
  i1354.textureWidth = i1355[21]
  i1354.textureHeight = i1355[22]
  i1354.nativeSize = new pc.Vec2( i1355[23], i1355[24] )
  i1354.pivot = new pc.Vec2( i1355[25], i1355[26] )
  i1354.textureRectOffset = new pc.Vec2( i1355[27], i1355[28] )
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1357 = data
  i1356.name = i1357[0]
  i1356.wrapMode = i1357[1]
  i1356.isLooping = !!i1357[2]
  i1356.length = i1357[3]
  var i1359 = i1357[4]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1359[i + 0]) );
  }
  i1356.curves = i1358
  var i1361 = i1357[5]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1361[i + 0]) );
  }
  i1356.events = i1360
  i1356.halfPrecision = !!i1357[6]
  i1356._frameRate = i1357[7]
  i1356.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1357[8], i1356.localBounds)
  i1356.hasMuscleCurves = !!i1357[9]
  var i1363 = i1357[10]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1356.clipMuscleConstant = i1362
  i1356.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1357[11], i1356.clipBindingConstant)
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1367 = data
  i1366.path = i1367[0]
  i1366.hash = i1367[1]
  i1366.componentType = i1367[2]
  i1366.property = i1367[3]
  i1366.keys = i1367[4]
  var i1369 = i1367[5]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1369[i + 0]) );
  }
  i1366.objectReferenceKeys = i1368
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1373 = data
  i1372.time = i1373[0]
  request.r(i1373[1], i1373[2], 0, i1372, 'value')
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1377 = data
  i1376.functionName = i1377[0]
  i1376.floatParameter = i1377[1]
  i1376.intParameter = i1377[2]
  i1376.stringParameter = i1377[3]
  request.r(i1377[4], i1377[5], 0, i1376, 'objectReferenceParameter')
  i1376.time = i1377[6]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1379 = data
  i1378.center = new pc.Vec3( i1379[0], i1379[1], i1379[2] )
  i1378.extends = new pc.Vec3( i1379[3], i1379[4], i1379[5] )
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1382.genericBindings = i1384
  var i1387 = i1383[1]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1382.pptrCurveMapping = i1386
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1389 = data
  i1388.name = i1389[0]
  var i1391 = i1389[1]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1391[i + 0]) );
  }
  i1388.layers = i1390
  var i1393 = i1389[2]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1393[i + 0]) );
  }
  i1388.parameters = i1392
  i1388.animationClips = i1389[3]
  i1388.avatarUnsupported = i1389[4]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.defaultWeight = i1397[1]
  i1396.blendingMode = i1397[2]
  i1396.avatarMask = i1397[3]
  i1396.syncedLayerIndex = i1397[4]
  i1396.syncedLayerAffectsTiming = !!i1397[5]
  i1396.syncedLayers = i1397[6]
  i1396.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1397[7], i1396.stateMachine)
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1399 = data
  i1398.id = i1399[0]
  i1398.name = i1399[1]
  i1398.path = i1399[2]
  var i1401 = i1399[3]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1401[i + 0]) );
  }
  i1398.states = i1400
  var i1403 = i1399[4]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1403[i + 0]) );
  }
  i1398.machines = i1402
  var i1405 = i1399[5]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1405[i + 0]) );
  }
  i1398.entryStateTransitions = i1404
  var i1407 = i1399[6]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1407[i + 0]) );
  }
  i1398.exitStateTransitions = i1406
  var i1409 = i1399[7]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1409[i + 0]) );
  }
  i1398.anyStateTransitions = i1408
  i1398.defaultStateId = i1399[8]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1413 = data
  i1412.id = i1413[0]
  i1412.name = i1413[1]
  i1412.cycleOffset = i1413[2]
  i1412.cycleOffsetParameter = i1413[3]
  i1412.cycleOffsetParameterActive = !!i1413[4]
  i1412.mirror = !!i1413[5]
  i1412.mirrorParameter = i1413[6]
  i1412.mirrorParameterActive = !!i1413[7]
  i1412.motionId = i1413[8]
  i1412.nameHash = i1413[9]
  i1412.fullPathHash = i1413[10]
  i1412.speed = i1413[11]
  i1412.speedParameter = i1413[12]
  i1412.speedParameterActive = !!i1413[13]
  i1412.tag = i1413[14]
  i1412.tagHash = i1413[15]
  i1412.writeDefaultValues = !!i1413[16]
  var i1415 = i1413[17]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 2, i1414, '')
  }
  i1412.behaviours = i1414
  var i1417 = i1413[18]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1417[i + 0]) );
  }
  i1412.transitions = i1416
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1423 = data
  i1422.fullPath = i1423[0]
  i1422.canTransitionToSelf = !!i1423[1]
  i1422.duration = i1423[2]
  i1422.exitTime = i1423[3]
  i1422.hasExitTime = !!i1423[4]
  i1422.hasFixedDuration = !!i1423[5]
  i1422.interruptionSource = i1423[6]
  i1422.offset = i1423[7]
  i1422.orderedInterruption = !!i1423[8]
  i1422.destinationStateId = i1423[9]
  i1422.isExit = !!i1423[10]
  i1422.mute = !!i1423[11]
  i1422.solo = !!i1423[12]
  var i1425 = i1423[13]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1425[i + 0]) );
  }
  i1422.conditions = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1431 = data
  i1430.destinationStateId = i1431[0]
  i1430.isExit = !!i1431[1]
  i1430.mute = !!i1431[2]
  i1430.solo = !!i1431[3]
  var i1433 = i1431[4]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1433[i + 0]) );
  }
  i1430.conditions = i1432
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1437 = data
  i1436.defaultBool = !!i1437[0]
  i1436.defaultFloat = i1437[1]
  i1436.defaultInt = i1437[2]
  i1436.name = i1437[3]
  i1436.nameHash = i1437[4]
  i1436.type = i1437[5]
  return i1436
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1438 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1439 = data
  i1438.useSafeMode = !!i1439[0]
  i1438.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1439[1], i1438.safeModeOptions)
  i1438.timeScale = i1439[2]
  i1438.unscaledTimeScale = i1439[3]
  i1438.useSmoothDeltaTime = !!i1439[4]
  i1438.maxSmoothUnscaledTime = i1439[5]
  i1438.rewindCallbackMode = i1439[6]
  i1438.showUnityEditorReport = !!i1439[7]
  i1438.logBehaviour = i1439[8]
  i1438.drawGizmos = !!i1439[9]
  i1438.defaultRecyclable = !!i1439[10]
  i1438.defaultAutoPlay = i1439[11]
  i1438.defaultUpdateType = i1439[12]
  i1438.defaultTimeScaleIndependent = !!i1439[13]
  i1438.defaultEaseType = i1439[14]
  i1438.defaultEaseOvershootOrAmplitude = i1439[15]
  i1438.defaultEasePeriod = i1439[16]
  i1438.defaultAutoKill = !!i1439[17]
  i1438.defaultLoopType = i1439[18]
  i1438.debugMode = !!i1439[19]
  i1438.debugStoreTargetId = !!i1439[20]
  i1438.showPreviewPanel = !!i1439[21]
  i1438.storeSettingsLocation = i1439[22]
  i1438.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1439[23], i1438.modules)
  i1438.createASMDEF = !!i1439[24]
  i1438.showPlayingTweens = !!i1439[25]
  i1438.showPausedTweens = !!i1439[26]
  return i1438
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1440 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1441 = data
  i1440.logBehaviour = i1441[0]
  i1440.nestedTweenFailureBehaviour = i1441[1]
  return i1440
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1443 = data
  i1442.showPanel = !!i1443[0]
  i1442.audioEnabled = !!i1443[1]
  i1442.physicsEnabled = !!i1443[2]
  i1442.physics2DEnabled = !!i1443[3]
  i1442.spriteEnabled = !!i1443[4]
  i1442.uiEnabled = !!i1443[5]
  i1442.textMeshProEnabled = !!i1443[6]
  i1442.tk2DEnabled = !!i1443[7]
  i1442.deAudioEnabled = !!i1443[8]
  i1442.deUnityExtendedEnabled = !!i1443[9]
  i1442.epoOutlineEnabled = !!i1443[10]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1447[i + 0]) );
  }
  i1444.files = i1446
  i1444.componentToPrefabIds = i1445[1]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1451 = data
  i1450.path = i1451[0]
  request.r(i1451[1], i1451[2], 0, i1450, 'unityObject')
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1453 = data
  var i1455 = i1453[0]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1455[i + 0]) );
  }
  i1452.scriptsExecutionOrder = i1454
  var i1457 = i1453[1]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1457[i + 0]) );
  }
  i1452.sortingLayers = i1456
  var i1459 = i1453[2]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1459[i + 0]) );
  }
  i1452.cullingLayers = i1458
  i1452.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1453[3], i1452.timeSettings)
  i1452.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1453[4], i1452.physicsSettings)
  i1452.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1453[5], i1452.physics2DSettings)
  i1452.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1453[6], i1452.qualitySettings)
  i1452.enableRealtimeShadows = !!i1453[7]
  i1452.enableAutoInstancing = !!i1453[8]
  i1452.enableStaticBatching = !!i1453[9]
  i1452.enableDynamicBatching = !!i1453[10]
  i1452.lightmapEncodingQuality = i1453[11]
  i1452.desiredColorSpace = i1453[12]
  var i1461 = i1453[13]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( i1461[i + 0] );
  }
  i1452.allTags = i1460
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.value = i1465[1]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1469 = data
  i1468.id = i1469[0]
  i1468.name = i1469[1]
  i1468.value = i1469[2]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1473 = data
  i1472.id = i1473[0]
  i1472.name = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1475 = data
  i1474.fixedDeltaTime = i1475[0]
  i1474.maximumDeltaTime = i1475[1]
  i1474.timeScale = i1475[2]
  i1474.maximumParticleTimestep = i1475[3]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1477 = data
  i1476.gravity = new pc.Vec3( i1477[0], i1477[1], i1477[2] )
  i1476.defaultSolverIterations = i1477[3]
  i1476.bounceThreshold = i1477[4]
  i1476.autoSyncTransforms = !!i1477[5]
  i1476.autoSimulation = !!i1477[6]
  var i1479 = i1477[7]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1479[i + 0]) );
  }
  i1476.collisionMatrix = i1478
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1483 = data
  i1482.enabled = !!i1483[0]
  i1482.layerId = i1483[1]
  i1482.otherLayerId = i1483[2]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'material')
  i1484.gravity = new pc.Vec2( i1485[2], i1485[3] )
  i1484.positionIterations = i1485[4]
  i1484.velocityIterations = i1485[5]
  i1484.velocityThreshold = i1485[6]
  i1484.maxLinearCorrection = i1485[7]
  i1484.maxAngularCorrection = i1485[8]
  i1484.maxTranslationSpeed = i1485[9]
  i1484.maxRotationSpeed = i1485[10]
  i1484.baumgarteScale = i1485[11]
  i1484.baumgarteTOIScale = i1485[12]
  i1484.timeToSleep = i1485[13]
  i1484.linearSleepTolerance = i1485[14]
  i1484.angularSleepTolerance = i1485[15]
  i1484.defaultContactOffset = i1485[16]
  i1484.autoSimulation = !!i1485[17]
  i1484.queriesHitTriggers = !!i1485[18]
  i1484.queriesStartInColliders = !!i1485[19]
  i1484.callbacksOnDisable = !!i1485[20]
  i1484.reuseCollisionCallbacks = !!i1485[21]
  i1484.autoSyncTransforms = !!i1485[22]
  var i1487 = i1485[23]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1487[i + 0]) );
  }
  i1484.collisionMatrix = i1486
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.layerId = i1491[1]
  i1490.otherLayerId = i1491[2]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1493 = data
  var i1495 = i1493[0]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1495[i + 0]) );
  }
  i1492.qualityLevels = i1494
  var i1497 = i1493[1]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( i1497[i + 0] );
  }
  i1492.names = i1496
  i1492.shadows = i1493[2]
  i1492.anisotropicFiltering = i1493[3]
  i1492.antiAliasing = i1493[4]
  i1492.lodBias = i1493[5]
  i1492.shadowCascades = i1493[6]
  i1492.shadowDistance = i1493[7]
  i1492.shadowmaskMode = i1493[8]
  i1492.shadowProjection = i1493[9]
  i1492.shadowResolution = i1493[10]
  i1492.softParticles = !!i1493[11]
  i1492.softVegetation = !!i1493[12]
  i1492.activeColorSpace = i1493[13]
  i1492.desiredColorSpace = i1493[14]
  i1492.masterTextureLimit = i1493[15]
  i1492.maxQueuedFrames = i1493[16]
  i1492.particleRaycastBudget = i1493[17]
  i1492.pixelLightCount = i1493[18]
  i1492.realtimeReflectionProbes = !!i1493[19]
  i1492.shadowCascade2Split = i1493[20]
  i1492.shadowCascade4Split = new pc.Vec3( i1493[21], i1493[22], i1493[23] )
  i1492.streamingMipmapsActive = !!i1493[24]
  i1492.vSyncCount = i1493[25]
  i1492.asyncUploadBufferSize = i1493[26]
  i1492.asyncUploadTimeSlice = i1493[27]
  i1492.billboardsFaceCameraPosition = !!i1493[28]
  i1492.shadowNearPlaneOffset = i1493[29]
  i1492.streamingMipmapsMemoryBudget = i1493[30]
  i1492.maximumLODLevel = i1493[31]
  i1492.streamingMipmapsAddAllCameras = !!i1493[32]
  i1492.streamingMipmapsMaxLevelReduction = i1493[33]
  i1492.streamingMipmapsRenderersPerFrame = i1493[34]
  i1492.resolutionScalingFixedDPIFactor = i1493[35]
  i1492.streamingMipmapsMaxFileIORequests = i1493[36]
  i1492.currentQualityLevel = i1493[37]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1503 = data
  i1502.mode = i1503[0]
  i1502.parameter = i1503[1]
  i1502.threshold = i1503[2]
  return i1502
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"19":[20],"21":[20],"22":[20],"23":[20],"24":[20],"25":[20],"26":[27],"28":[13],"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[37],"44":[37],"45":[37],"46":[37],"47":[37],"48":[37],"49":[37],"50":[13],"51":[52],"53":[54],"55":[54],"56":[57],"58":[1],"59":[13],"60":[61],"62":[63],"64":[56],"65":[57],"66":[13],"15":[13],"67":[68],"69":[57],"70":[52,57],"71":[57,72],"73":[57],"74":[72,57],"75":[52],"76":[72,57],"77":[57],"78":[79],"80":[79],"81":[79],"82":[57],"83":[57],"84":[56],"85":[72,57],"86":[57],"87":[56],"88":[57],"89":[57],"90":[57],"91":[57],"92":[57],"93":[57],"94":[57],"95":[57],"96":[57],"97":[72,57],"98":[57],"99":[57],"100":[57],"101":[57],"102":[72,57],"103":[57],"104":[63],"105":[63],"106":[63],"107":[63],"108":[13],"109":[13]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","LiquidStackController","Assets.SodaPlayable.Scripts.BottleHandler","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","Assets.SodaPlayable.Scripts.BottleSpawnController","Assets.SodaPlayable.Scripts.InputController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.62f1";

Deserializers.productName = "SodaPlayableCore";

Deserializers.lunaInitializationTime = "12/19/2025 12:46:00";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "35462";

Deserializers.projectId = "568d044f79ff64815b60be428eb3ffd8";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.shadergraph: 17.0.4\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1852";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4000";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "bba311a3-1115-4aa4-9e62-e06be1600e73";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


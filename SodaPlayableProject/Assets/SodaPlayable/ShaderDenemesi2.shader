Shader "Custom/LayeredSprite_4Color_Unified_WithTailAmount"
{
    Properties
    {
        [Header(Shared Textures)]
        _BottomTex ("Bottom Texture (All Stacks)", 2D) = "white" {}
        _MiddleTex ("Middle Texture (All Stacks)", 2D) = "white" {}
        _TopTex    ("Top Texture (All Stacks)",    2D) = "white" {}

        [Header(Global Region Control)]
        _SplitYBottom ("Middle Start Y (Bottom)", Range(0,1)) = 0.3
        _SplitYTop ("Middle End Y (Top)", Range(0,1)) = 0.8
        _EdgeSoftness ("Split Edge Softness", Range(0,0.1)) = 0.02

        [Header(Global UV Control)]
        _GlobalBottomTiling ("Bottom Tiling", Vector) = (1,1,0,0)
        _GlobalBottomOffset ("Bottom Offset", Vector) = (0,0,0,0)
        _GlobalMiddleTiling ("Middle Tiling", Vector) = (1,1,0,0)
        _GlobalMiddleOffset ("Middle Offset", Vector) = (0,0,0,0)
        _GlobalTopTiling ("Top Tiling", Vector) = (1,1,0,0)
        _GlobalTopOffset ("Top Offset", Vector) = (0,0,0,0)

        [Space(20)]
        [Header(Stack 1 Colors Base Layer)]
        _Stack1Offset ("Stack 1 Offset (X, Y)", Vector) = (0,0,0,0)
        _Stack1TailAmount ("Stack 1 Tail Amount", Range(0,1)) = 1.0
        _Stack1TopYOffset ("Stack 1 Top Y Offset", Range(-1,1)) = 0.0
        _BottomColor1 ("Bottom Tint 1", Color) = (1,1,1,1)
        _MiddleColor1 ("Middle Tint 1", Color) = (1,1,1,1)
        _TopColor1 ("Top Tint 1", Color) = (1,1,1,1)

        [Space(10)]
        [Header(Stack 2 Colors)]
        _Stack2Offset ("Stack 2 Offset (X, Y)", Vector) = (0,0,0,0)
        _Stack2TailAmount ("Stack 2 Tail Amount", Range(0,1)) = 1.0
        _Stack2TopYOffset ("Stack 2 Top Y Offset", Range(-1,1)) = 0.0
        _BottomColor2 ("Bottom Tint 2", Color) = (1,1,1,0)
        _MiddleColor2 ("Middle Tint 2", Color) = (1,1,1,0)
        _TopColor2 ("Top Tint 2", Color) = (1,1,1,0)

        [Space(10)]
        [Header(Stack 3 Colors)]
        _Stack3Offset ("Stack 3 Offset (X, Y)", Vector) = (0,0,0,0)
        _Stack3TailAmount ("Stack 3 Tail Amount", Range(0,1)) = 1.0
        _Stack3TopYOffset ("Stack 3 Top Y Offset", Range(-1,1)) = 0.0
        _BottomColor3 ("Bottom Tint 3", Color) = (1,1,1,0)
        _MiddleColor3 ("Middle Tint 3", Color) = (1,1,1,0)
        _TopColor3 ("Top Tint 3", Color) = (1,1,1,0)

        [Space(10)]
        [Header(Stack 4 Colors Top Layer)]
        _Stack4Offset ("Stack 4 Offset (X, Y)", Vector) = (0,0,0,0)
        _Stack4TailAmount ("Stack 4 Tail Amount", Range(0,1)) = 1.0
        _Stack4TopYOffset ("Stack 4 Top Y Offset", Range(-1,1)) = 0.0
        _BottomColor4 ("Bottom Tint 4", Color) = (1,1,1,0)
        _MiddleColor4 ("Middle Tint 4", Color) = (1,1,1,0)
        _TopColor4 ("Top Tint 4", Color) = (1,1,1,0)
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent"
            "RenderType"="Transparent"
            "IgnoreProjector"="True"
            "CanUseSpriteAtlas"="True"
        }

        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Off
        Lighting Off

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            // Shared textures
            sampler2D _BottomTex;
            sampler2D _MiddleTex;
            sampler2D _TopTex;

            // Global controls
            float _SplitYBottom;
            float _SplitYTop;
            float _EdgeSoftness;
            float4 _GlobalBottomTiling;
            float4 _GlobalBottomOffset;
            float4 _GlobalMiddleTiling;
            float4 _GlobalMiddleOffset;
            float4 _GlobalTopTiling;
            float4 _GlobalTopOffset;

            // Stack colors + offsets + tail amounts + top Y offsets
            float4 _Stack1Offset;
            float _Stack1TailAmount;
            float _Stack1TopYOffset;
            fixed4 _BottomColor1; fixed4 _MiddleColor1; fixed4 _TopColor1;
            
            float4 _Stack2Offset;
            float _Stack2TailAmount;
            float _Stack2TopYOffset;
            fixed4 _BottomColor2; fixed4 _MiddleColor2; fixed4 _TopColor2;
            
            float4 _Stack3Offset;
            float _Stack3TailAmount;
            float _Stack3TopYOffset;
            fixed4 _BottomColor3; fixed4 _MiddleColor3; fixed4 _TopColor3;
            
            float4 _Stack4Offset;
            float _Stack4TailAmount;
            float _Stack4TopYOffset;
            fixed4 _BottomColor4; fixed4 _MiddleColor4; fixed4 _TopColor4;

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv     : TEXCOORD0;
                float4 color  : COLOR;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                float2 uv     : TEXCOORD0;
                float4 color  : COLOR;
            };

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.color = v.color;
                return o;
            }

            // Helper: Sample textures with offset and tail amount
            void SampleTexturesWithOffset(
                float2 uv, float2 offset, float tailAmount, float topYOffset,
                out fixed4 sampledBot, out fixed4 sampledMid, out fixed4 sampledTop,
                out float maskBM, out float maskMT
            )
            {
                // Apply offset to UV coordinates (for bottom and middle)
                float2 offsetUV = uv + offset;
                
                // Apply TOP layer independent Y offset (per stack)
                float2 topOffsetUV = uv + float2(offset.x, offset.y + topYOffset);
                
                // Check bounds for bottom/middle - eğer dışarıdaysa transparent döndür
                if (offsetUV.x < 0 || offsetUV.x > 1 || offsetUV.y < 0 || offsetUV.y > 1)
                {
                    sampledBot = fixed4(0, 0, 0, 0);
                    sampledMid = fixed4(0, 0, 0, 0);
                    maskBM = 0;
                    maskMT = 0;
                }
                else
                {
                    // Apply tail amount - ONLY affects Bottom and Middle layers
                    bool isBelowTailCutoff = offsetUV.y > tailAmount;
                    
                    if (isBelowTailCutoff)
                    {
                        sampledBot = fixed4(0, 0, 0, 0);
                        sampledMid = fixed4(0, 0, 0, 0);
                        maskBM = 0;
                        maskMT = 0;
                    }
                    else
                    {
                        // Recalculate UVs with offset
                        float2 uvBottomOffset = offsetUV * _GlobalBottomTiling.xy + _GlobalBottomOffset.xy;
                        
                        // Middle UV - offset'li UV kullanarak yeniden hesapla
                        float middleRegionHeight = max(_SplitYTop - _SplitYBottom, 0.001);
                        float2 uvMiddleOffset;
                        
                        // X ekseni: normal tiling/offset
                        uvMiddleOffset.x = offsetUV.x * _GlobalMiddleTiling.x + _GlobalMiddleOffset.x;
                        
                        // Y ekseni: region-based mapping + tiling
                        float normalizedY = (offsetUV.y - _SplitYBottom) / middleRegionHeight;
                        uvMiddleOffset.y = normalizedY * _GlobalMiddleTiling.y + _GlobalMiddleOffset.y;
                        
                        sampledBot = tex2D(_BottomTex, uvBottomOffset);
                        sampledMid = tex2D(_MiddleTex, uvMiddleOffset);
                        
                        // Recalculate masks with offset UV
                        float edgeMinBottom = _SplitYBottom - _EdgeSoftness;
                        float edgeMaxBottom = _SplitYBottom + _EdgeSoftness;
                        maskBM = smoothstep(edgeMinBottom, edgeMaxBottom, offsetUV.y);

                        float edgeMinTop = _SplitYTop - _EdgeSoftness;
                        float edgeMaxTop = _SplitYTop + _EdgeSoftness;
                        maskMT = smoothstep(edgeMinTop, edgeMaxTop, offsetUV.y);
                    }
                }
                
                // TOP layer - uses separate offset with Y movement
                // Check bounds for top layer
                if (topOffsetUV.x < 0 || topOffsetUV.x > 1 || topOffsetUV.y < 0 || topOffsetUV.y > 1)
                {
                    sampledTop = fixed4(0, 0, 0, 0);
                }
                else
                {
                    float2 uvTopOffset = topOffsetUV * _GlobalTopTiling.xy + _GlobalTopOffset.xy;
                    sampledTop = tex2D(_TopTex, uvTopOffset);
                }
            }

            // Helper: Blend one color stack
            fixed4 BlendColorStack(
                fixed4 sampledBot, fixed4 sampledMid, fixed4 sampledTop,
                fixed4 botColor, fixed4 midColor, fixed4 topColor,
                float maskBM, float maskMT
            )
            {
                // Apply color tint to sampled textures
                fixed4 colBot = sampledBot * botColor;
                fixed4 colMid = sampledMid * midColor;
                fixed4 colTop = sampledTop * topColor;

                // Bottom + Middle blend
                fixed3 colorBM = lerp(colBot.rgb, colMid.rgb, maskBM);
                float alphaBM = lerp(colBot.a, colMid.a, maskBM);

                // Bottom+Middle + Top blend
                fixed3 colorAll = lerp(colorBM, colTop.rgb, maskMT);
                float alphaAll = lerp(alphaBM, colTop.a, maskMT);

                // Top overlay
                fixed3 finalColor = lerp(colorAll, colTop.rgb, colTop.a * (1.0 - maskMT));
                float finalAlpha = max(alphaAll, colTop.a);

                return fixed4(finalColor, finalAlpha);
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float2 uv = i.uv;

                // === APPLY COLORS TO EACH STACK (with individual offsets and tail amounts) ===
                
                // Stack 1
                fixed4 sampled1Bot, sampled1Mid, sampled1Top;
                float mask1BM, mask1MT;
                SampleTexturesWithOffset(uv, _Stack1Offset.xy, _Stack1TailAmount, _Stack1TopYOffset,
                    sampled1Bot, sampled1Mid, sampled1Top, mask1BM, mask1MT);
                fixed4 stack1 = BlendColorStack(
                    sampled1Bot, sampled1Mid, sampled1Top,
                    _BottomColor1, _MiddleColor1, _TopColor1,
                    mask1BM, mask1MT
                );

                // Stack 2
                fixed4 sampled2Bot, sampled2Mid, sampled2Top;
                float mask2BM, mask2MT;
                SampleTexturesWithOffset(uv, _Stack2Offset.xy, _Stack2TailAmount, _Stack2TopYOffset,
                    sampled2Bot, sampled2Mid, sampled2Top, mask2BM, mask2MT);
                fixed4 stack2 = BlendColorStack(
                    sampled2Bot, sampled2Mid, sampled2Top,
                    _BottomColor2, _MiddleColor2, _TopColor2,
                    mask2BM, mask2MT
                );

                // Stack 3
                fixed4 sampled3Bot, sampled3Mid, sampled3Top;
                float mask3BM, mask3MT;
                SampleTexturesWithOffset(uv, _Stack3Offset.xy, _Stack3TailAmount, _Stack3TopYOffset,
                    sampled3Bot, sampled3Mid, sampled3Top, mask3BM, mask3MT);
                fixed4 stack3 = BlendColorStack(
                    sampled3Bot, sampled3Mid, sampled3Top,
                    _BottomColor3, _MiddleColor3, _TopColor3,
                    mask3BM, mask3MT
                );

                // Stack 4
                fixed4 sampled4Bot, sampled4Mid, sampled4Top;
                float mask4BM, mask4MT;
                SampleTexturesWithOffset(uv, _Stack4Offset.xy, _Stack4TailAmount, _Stack4TopYOffset,
                    sampled4Bot, sampled4Mid, sampled4Top, mask4BM, mask4MT);
                fixed4 stack4 = BlendColorStack(
                    sampled4Bot, sampled4Mid, sampled4Top,
                    _BottomColor4, _MiddleColor4, _TopColor4,
                    mask4BM, mask4MT
                );

                // === COMPOSITE STACKS (alpha blend: 1->2->3->4) ===
                fixed4 result = stack1;
                
                result.rgb = lerp(result.rgb, stack2.rgb, stack2.a);
                result.a = max(result.a, stack2.a);

                result.rgb = lerp(result.rgb, stack3.rgb, stack3.a);
                result.a = max(result.a, stack3.a);

                result.rgb = lerp(result.rgb, stack4.rgb, stack4.a);
                result.a = max(result.a, stack4.a);

                return result * i.color;
            }
            ENDCG
        }
    }
}
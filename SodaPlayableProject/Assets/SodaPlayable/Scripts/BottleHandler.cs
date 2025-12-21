using DG.Tweening;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Assets.SodaPlayable.Scripts
{
    public class BottleHandler : MonoBehaviour
    {
        public List<ColorType> colorTypes = new List<ColorType>();
        public byte bottleIndex;

        [SerializeField] private LiquidStackController stackController;
        [SerializeField] private GameObject completeParticle;

        [SerializeField] private List<SpriteRenderer> sprites;
        [SerializeField] private float selectionAnimHeight = 3;
        [SerializeField] private float selectionAnimDuration = .3f;

        public Transform leftPourPoint;
        public Transform rightPourPoint;

        private Vector2 _initPos;

        public bool IsSelectable { get; set; }
        public bool IsEmpty => colorTypes.Count == 0;
        public bool IsFull => colorTypes.Count == 4;
        public bool IsFullySameColor
        {
            get
            {
                ColorType refColor = colorTypes[0];
                return colorTypes.All(x => x == refColor);
            }
        }
        public bool IsOccupied { get; set; }
        public bool IsPouring { get; private set; }

        private void Start()
        {
            foreach (var item in sprites)
            {
                item.material = new Material(item.material);
            }
        }

        public void Init(BottleData data, byte bottleIndex)
        {
            _initPos = transform.position;

            if (data.color1 != ColorType.None)
            {
                sprites[0].material.color = Colors.ColorMap[data.color1];
                colorTypes.Add(data.color1);
            }
            else
                sprites[0].enabled = false;
            if (data.color2 != ColorType.None)
            {
                sprites[1].material.color = Colors.ColorMap[data.color2];
                colorTypes.Add(data.color2);
            }
            else
                sprites[1].enabled = false;
            if (data.color3 != ColorType.None)
            {
                sprites[2].material.color = Colors.ColorMap[data.color3];
                colorTypes.Add(data.color3);
            }
            else
                sprites[2].enabled = false;
            if (data.color4 != ColorType.None)
            {
                sprites[3].material.color = Colors.ColorMap[data.color4];
                colorTypes.Add(data.color4);
            }
            else
                sprites[3].enabled = false;

            if (!IsEmpty)
            {
                IsSelectable = true;
            }

            this.bottleIndex = bottleIndex;
        }

        public void OnSelect()
        {
            IsSelectable = false;
            transform.DOMoveY(selectionAnimHeight, selectionAnimDuration).SetRelative(true).SetEase(Ease.OutBack);
        }
        public void OnUnselect()
        {
            transform.DORotate(Vector3.zero, selectionAnimDuration).SetEase(Ease.Linear);
            transform.DOMove(_initPos, selectionAnimDuration).SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                    if (!IsEmpty) IsSelectable = true;
                    IsOccupied = false;
                    IsPouring = false;
                });
        }

        public bool CheckColorMatchWithOtherBottle(BottleHandler secondBottle)
        {
            if (secondBottle.IsEmpty)
                return true;

            if (!secondBottle.IsFull && secondBottle.colorTypes[0] == colorTypes[0])
                return true;

            return false;
        }

        public void PourToBottle(BottleHandler secondBottle)
        {
            IsOccupied = true;
            IsPouring = true;

            secondBottle.IsSelectable = false;
            secondBottle.IsOccupied = true;
            stackController.Pour(secondBottle, colorTypes[0]);
        }

        internal void CheckComplete()
        {
            if (IsFull && IsFullySameColor)
            {
                completeParticle.SetActive(true);
            }
            else
            {
                IsSelectable = true;
                IsOccupied = false;
            }
        }
    }
}
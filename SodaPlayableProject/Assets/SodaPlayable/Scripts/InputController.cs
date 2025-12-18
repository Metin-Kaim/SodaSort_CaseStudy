using UnityEngine;

namespace Assets.SodaPlayable.Scripts
{
    public class InputController : MonoBehaviour
    {
        [SerializeField] private LayerMask bottleLayer;

        private bool _isInputActive = true;
        private BottleHandler _firstSelecteBottle;

        private void OnEnable()
        {
            //InputSignals.Instance.onActivateInput += ActivateInput;
            //InputSignals.Instance.onDeactivateInput += DeactivateInput;
        }
        private void OnDisable()
        {
            //InputSignals.Instance.onActivateInput += ActivateInput;
            //InputSignals.Instance.onDeactivateInput += DeactivateInput;
        }

        private void Update()
        {
            if (!_isInputActive) return;

            if (Input.GetMouseButtonDown(0))
            {
                Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

                Collider2D hit = Physics2D.OverlapPoint(mousePos, bottleLayer);

                if (hit != null)
                {
                    BottleHandler selectedBottle = hit.GetComponent<BottleHandler>();

                    if (_firstSelecteBottle == null)
                    {
                        if (!selectedBottle.IsSelectable) return;
                        _firstSelecteBottle = selectedBottle;
                        _firstSelecteBottle.OnSelect();
                    }
                    else
                    {
                        if (selectedBottle == _firstSelecteBottle)
                        {
                            _firstSelecteBottle.OnUnselect();
                            _firstSelecteBottle = null;
                        }
                        else
                        {
                            if (selectedBottle.IsOccupied) return;
                            BottleHandler secondBottle = selectedBottle;
                            if (_firstSelecteBottle.CheckColorMatchWithOtherBottle(secondBottle))
                            {
                                _firstSelecteBottle.PourToBottle(secondBottle);
                                _firstSelecteBottle = null;
                            }
                            else
                            {
                                _firstSelecteBottle.OnUnselect();
                                _firstSelecteBottle = secondBottle;
                                _firstSelecteBottle.OnSelect();
                            }
                        }
                    }
                }
            }
        }

        private void ActivateInput()
        {
            _isInputActive = true;
        }
        private void DeactivateInput()
        {
            _isInputActive = false;
        }
    }
}